import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Comparison from "./components/Comparison";
import {
  Savings,
  Accessories,
  Benefits,
  Experience,
  Services,
} from "./components/Editorial";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { ProductPicker, Bag, SearchPanel } from "./components/Commerce";
import { Media } from "./components/Media";
import { products } from "./data/products";
function readBag() {
  try {
    const value = JSON.parse(localStorage.getItem("apple04-bag") || "[]");
    return Array.isArray(value)
      ? value.filter(
          (i) =>
            products.some((p) => p.id === i.productId) &&
            Number.isFinite(i.price) &&
            typeof i.color === "string",
        )
      : [];
  } catch {
    return [];
  }
}
export default function App() {
  const [modal, setModal] = useState(null);
  const [bag, setBag] = useState(readBag);
  const [notice, setNotice] = useState("");
  useEffect(() => {
    try {
      localStorage.setItem("apple04-bag", JSON.stringify(bag));
    } catch {
      /* Private browsing can disable storage. */
    }
  }, [bag]);
  useEffect(() => {
    if (!notice) return;
    const t = setTimeout(() => setNotice(""), 3500);
    return () => clearTimeout(t);
  }, [notice]);
  const buy = (p) => setModal({ kind: "product", product: p });
  const learn = (p) => setModal({ kind: "product", product: p, details: true });
  const close = () => setModal(null);
  const browse = () => {
    close();
    document
      .getElementById("compare")
      .scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
  };
  return (
    <div id="top">
      <Header
        count={bag.length}
        onSearch={() => setModal({ kind: "search" })}
        onBag={() => setModal({ kind: "bag" })}
      />
      <main id="main">
        <Hero
          id="iphone14"
          product={products[1]}
          labelImage={1845}
          image={1855}
          title={
            <>
              Two great sizes.
              <br />
              Now with a splash of yellow.
            </>
          }
          onBuy={buy}
          onLearn={learn}
        />
        <Hero
          id="pro"
          product={products[0]}
          labelImage={1860}
          image={1869}
          title="Pro. Beyond."
          dark
          onBuy={buy}
          onLearn={learn}
        />
        <Hero
          id="se"
          product={products[3]}
          labelImage={1873}
          image={1884}
          title={
            <>
              Love the power.
              <br />
              Love the price.
            </>
          }
          split
          onBuy={buy}
          onLearn={learn}
        />
        <section className="guided-tour">
          <Media
            id={1889}
            alt="An Apple Specialist presenting iPhone 14 and iPhone 14 Pro"
          />
          <div>
            <p>A Guided Tour of</p>
            <h2>
              iPhone 14 &<br />
              iPhone 14 Pro
            </h2>
            <a
              className="pill light"
              href="https://www.apple.com/iphone/"
              target="_blank"
              rel="noreferrer"
            >
              Explore the guided tour ↗
            </a>
          </div>
        </section>
        <Comparison onBuy={buy} onLearn={learn} />
        <Savings />
        <Accessories />
        <Benefits />
        <Experience />
        <Services />
      </main>
      <Footer />
      {modal && (
        <Modal
          title={
            modal.kind === "product"
              ? modal.product.name
              : modal.kind === "bag"
                ? "Your bag"
                : "Search iPhone"
          }
          onClose={close}
          wide={modal.kind === "product"}
        >
          {modal.kind === "product" ? (
            <ProductPicker
              key={modal.product.id}
              product={modal.product}
              details={modal.details}
              onAdd={(item) => {
                setBag([...bag, item]);
                setModal({ kind: "bag" });
                setNotice(`${item.name} added to your bag.`);
              }}
            />
          ) : modal.kind === "bag" ? (
            <Bag
              items={bag}
              onRemove={(i) => setBag(bag.filter((_, j) => j !== i))}
              onBrowse={browse}
            />
          ) : (
            <SearchPanel onSelect={buy} />
          )}
        </Modal>
      )}
      <div role="status" className={`toast ${notice ? "visible" : ""}`}>
        {notice}
      </div>
    </div>
  );
}

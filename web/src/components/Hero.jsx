import { Media } from "./Media";
export function ProductActions({ product, onBuy, onLearn }) {
  return (
    <div className="actions">
      <button className="pill" onClick={() => onBuy(product)}>
        Buy
      </button>
      <button className="text-link" onClick={() => onLearn(product)}>
        Learn more <span aria-hidden="true">›</span>
      </button>
    </div>
  );
}
export default function Hero({
  product,
  id,
  labelImage,
  image,
  title,
  dark = false,
  split = false,
  onBuy,
  onLearn,
}) {
  const Heading = id === "iphone14" ? "h1" : "h2";
  return (
    <section
      id={id}
      className={`hero ${dark ? "dark" : ""} ${split ? "split" : ""}`}
      aria-label={product.name}
    >
      <div className="hero-copy">
        {id === "iphone14" && <p className="eyebrow">New</p>}
        <Media
          id={labelImage}
          alt={product.name}
          className="product-wordmark"
          eager
        />
        <Heading className={split ? "gradient" : ""}>{title}</Heading>
        <p className="price">
          From ${product.price} or $
          {{ pro: "41.62", 14: "33.29", se: "17.87" }[product.id]}/mo. for 24
          mo. before trade-in<sup>2</sup>
        </p>
        <ProductActions product={product} onBuy={onBuy} onLearn={onLearn} />
      </div>
      <Media
        id={image}
        alt={`${product.name} in its available finishes`}
        className="hero-image"
        eager={id === "iphone14"}
      />
    </section>
  );
}

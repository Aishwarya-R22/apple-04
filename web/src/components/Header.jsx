import { useState } from "react";
import {
  Search,
  ShoppingBag,
  Menu,
  X,
  Smartphone,
  Headphones,
  Disc,
  Wallet,
  CreditCard,
  Layers,
  ShoppingCart,
} from "lucide-react";
import { AppleMark } from "./Media";
const globalLinks = [
  ["Store", "https://www.apple.com/store"],
  ["Mac", "https://www.apple.com/mac/"],
  ["iPad", "https://www.apple.com/ipad/"],
  ["iPhone", "#top"],
  ["Watch", "https://www.apple.com/watch/"],
  ["AirPods", "#airpods"],
  ["TV & Home", "https://www.apple.com/tv-home/"],
  ["Entertainment", "#services"],
  ["Accessories", "#accessories"],
  ["Support", "https://support.apple.com/"],
];
const chapters = [
  ["iPhone 14 Pro", "#pro", Smartphone, true],
  ["iPhone 14", "#iphone14", Smartphone, true],
  ["iPhone 13", "#compare", Smartphone],
  ["iPhone SE", "#se", Smartphone],
  ["iPhone 12", "https://www.apple.com/iphone/compare/", Smartphone],
  ["Compare", "#compare", Layers],
  ["AirPods", "#airpods", Headphones],
  ["AirTag", "#airtag", Disc],
  ["Accessories", "#accessories", Wallet],
  ["Apple Card", "#savings", CreditCard],
  ["iOS 16", "#ios", Layers],
  ["Shop iPhone", "#compare", ShoppingCart],
];
export default function Header({ count, onSearch, onBag }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="global-header">
        <nav aria-label="Global navigation" className="global-nav">
          <a href="#top" aria-label="Apple home">
            <AppleMark />
          </a>
          <div className={`global-links ${open ? "open" : ""}`}>
            {globalLinks.map(([name, href]) => (
              <a key={name} href={href} onClick={() => setOpen(false)}>
                {name}
              </a>
            ))}
          </div>
          <button
            className="icon-button"
            aria-label="Search iPhone"
            onClick={onSearch}
          >
            <Search size={17} />
          </button>
          <button
            className="icon-button bag-trigger"
            aria-label={`Shopping bag, ${count} items`}
            onClick={onBag}
          >
            <ShoppingBag size={17} />
            {count > 0 && <span>{count}</span>}
          </button>
          <button
            className="icon-button menu-button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </nav>
      </header>
      <nav className="chapter-nav" aria-label="iPhone navigation">
        {chapters.map(([name, href, Icon, isNew]) => (
          <a href={href} key={name}>
            <Icon aria-hidden="true" strokeWidth={1.15} size={42} />
            <span>{name}</span>
            {isNew && <small>New</small>}
          </a>
        ))}
      </nav>
      <div className="trade-strip">
        Get $200–$600 in credit toward iPhone 14 or iPhone 14 Pro when you trade
        in iPhone 11 or higher.<sup>1</sup>{" "}
        <a href="#compare">
          Shop iPhone <span aria-hidden="true">›</span>
        </a>
      </div>
    </>
  );
}

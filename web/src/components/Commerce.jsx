import { useState } from "react";
import { Media } from "./Media";
import { money, priceFor, storageOptions, products } from "../data/products";
export function ProductPicker({ product, onAdd, details = false }) {
  const [color, setColor] = useState(product.colors[0]);
  const [storage, setStorage] = useState(storageOptions(product)[0]);
  return (
    <div className="picker">
      <div className="picker-art">
        <Media id={product.image} alt={product.name} />
        <p className="muted">Product overview · available finishes below</p>
      </div>
      <div>
        <p className="eyebrow">{product.tagline}</p>
        {details && (
          <p>
            {product.display} {product.screen}. {product.camera}. {product.chip}
            . Up to {product.battery} hours of video playback.
          </p>
        )}
        <h3>Make it yours.</h3>
        <fieldset>
          <legend>Finish — {color}</legend>
          <div className="color-options">
            {product.colors.map((c, i) => (
              <button
                key={c}
                aria-label={c}
                aria-pressed={color === c}
                className={`color-dot ${color === c ? "selected" : ""}`}
                style={{ "--swatch": product.hex[i] }}
                onClick={() => setColor(c)}
              />
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend>Storage</legend>
          <div className="storage-options">
            {storageOptions(product).map((s) => (
              <button
                key={s}
                aria-pressed={storage === s}
                className={s === storage ? "selected" : ""}
                onClick={() => setStorage(s)}
              >
                {s} GB
              </button>
            ))}
          </div>
        </fieldset>
        <p className="picker-price">{money(priceFor(product, storage))}</p>
        <button
          className="pill"
          onClick={() =>
            onAdd({
              productId: product.id,
              name: product.name,
              image: product.image,
              color,
              storage,
              price: priceFor(product, storage),
            })
          }
        >
          Add to bag
        </button>
        <p className="muted">
          Local shopping bag. No payment or order is submitted.
        </p>
      </div>
    </div>
  );
}
export function Bag({ items, onRemove, onBrowse }) {
  return items.length ? (
    <>
      <div className="bag-list">
        {items.map((item, i) => (
          <div className="bag-item" key={`${item.productId}-${i}`}>
            <Media id={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>
                {item.color} · {item.storage} GB
              </p>
              <button
                className="text-link"
                onClick={() => onRemove(i)}
                aria-label={`Remove ${item.name} from bag`}
              >
                Remove
              </button>
            </div>
            <strong>{money(item.price)}</strong>
          </div>
        ))}
      </div>
      <div className="bag-total">
        <span>Total</span>
        <strong>{money(items.reduce((s, i) => s + i.price, 0))}</strong>
      </div>
      <p className="muted">
        Your selections are saved on this device. This project does not process
        orders or payments.
      </p>
      <button className="pill" onClick={onBrowse}>
        Continue exploring
      </button>
    </>
  ) : (
    <div className="empty-state">
      <p>Your bag is empty.</p>
      <p>Find the iPhone that’s right for you.</p>
      <button className="pill" onClick={onBrowse}>
        Explore iPhone
      </button>
    </div>
  );
}
export function SearchPanel({ onSelect }) {
  const [query, setQuery] = useState("");
  const results = products.filter((p) =>
    (p.name + " " + p.tagline + " " + p.colors.join(" "))
      .toLowerCase()
      .includes(query.trim().toLowerCase()),
  );
  return (
    <>
      <label className="search-label" htmlFor="search">
        Find your iPhone
      </label>
      <input
        autoFocus
        id="search"
        className="search-input"
        placeholder="Search models or colors"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="search-results" aria-live="polite">
        {results.length ? (
          results.map((p) => (
            <button key={p.id} onClick={() => onSelect(p)}>
              <Media id={p.image} alt="" />
              <span>
                <strong>{p.name}</strong>
                <small>From {money(p.price)}</small>
              </span>
              <span aria-hidden="true">›</span>
            </button>
          ))
        ) : (
          <p>No matches. Try “iPhone 14”, “SE”, or “Blue”.</p>
        )}
      </div>
    </>
  );
}

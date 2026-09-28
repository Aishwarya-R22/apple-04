import { Media } from "./Media";
import { products, money } from "../data/products";
export default function Comparison({ onBuy, onLearn }) {
  return (
    <section className="comparison" id="compare">
      <h2>Which iPhone is right for you?</h2>
      <div className="compare-grid">
        {products.map((p, i) => (
          <article className="compare-column" key={p.id}>
            <div className="compare-intro">
              <Media id={p.image} alt={p.name} className="compare-phone" />
              <Media
                id={p.swatches}
                alt={`Available in ${p.colors.length} colors`}
                className="swatches-image"
              />
              <span className="new-label">{p.new ? "New" : "\u00a0"}</span>
              <h3>{p.name}</h3>
              <p>{p.tagline}</p>
              <p className="compare-price">
                From {money(p.price)}
                {i === 1 || i === 2 ? "*" : ""}
              </p>
              <button className="pill small" onClick={() => onBuy(p)}>
                Buy
              </button>
              <button className="text-link" onClick={() => onLearn(p)}>
                Learn more ›
              </button>
            </div>
            <div className="spec display-spec">
              <strong>{p.display}</strong>
              <span>
                {p.screen}
                <sup>3</sup>
              </span>
              {i === 0 && (
                <>
                  <span>ProMotion technology</span>
                  <span>Always-On display</span>
                </>
              )}
            </div>
            <div className="spec island-spec">
              {p.features[0] ? (
                <>
                  <Media id={p.features[0]} />
                  <span>Dynamic Island</span>
                  <small>
                    A new way to
                    <br />
                    interact with iPhone
                  </small>
                </>
              ) : (
                <span aria-label="Not available">—</span>
              )}
            </div>
            <div className="spec safety-spec">
              <Media id={p.features[1]} />
              {i < 2 && (
                <span>
                  Emergency SOS via satellite<sup>4</sup>
                </span>
              )}
              <span>Emergency SOS</span>
              {i < 2 && (
                <span>
                  Crash Detection<sup>5</sup>
                </span>
              )}
            </div>
            <div className="spec camera-spec">
              <Media id={p.features[2]} />
              <span>{p.camera}</span>
              <small>{p.lens}</small>
              {i < 2 && (
                <small>
                  Photonic Engine for incredible
                  <br />
                  detail and color
                </small>
              )}
              <small>
                {i === 3 ? "Front camera" : "TrueDepth front camera"}
              </small>
            </div>
            <div className="spec action-spec">
              {p.features[3] ? (
                <>
                  <Media id={p.features[3]} />
                  <small>
                    Action mode smooths out
                    <br />
                    shaky handheld videos
                  </small>
                </>
              ) : (
                <span aria-label="Not available">—</span>
              )}
            </div>
            <div className="spec">
              <Media id={p.features[4]} />
              <span>
                Up to {p.battery} hours
                <br />
                video playback<sup>6</sup>
              </span>
            </div>
            <div className="spec">
              <Media id={p.features[5]} />
              <span>{p.chip}</span>
            </div>
            <div className="spec">
              <Media id={p.features[6]} />
              <span>{i === 3 ? "Touch ID" : "Face ID"}</span>
            </div>
            <div className="spec">
              <Media id={p.features[7]} />
              <span>
                {i === 3 ? "5G cellular" : "Superfast 5G cellular"}
                <sup>7</sup>
              </span>
            </div>
          </article>
        ))}
      </div>
      <div className="comparison-links">
        <a href="https://www.apple.com/iphone/compare/">
          Compare all iPhone models ›
        </a>
        <button className="text-link" onClick={() => onBuy(products[1])}>
          Shop iPhone ›
        </button>
      </div>
    </section>
  );
}

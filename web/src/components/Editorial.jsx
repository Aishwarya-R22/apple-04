import { Media, AppleMark } from "./Media";
const A = ({ href, children }) => (
  <a href={href}>
    {children} <span aria-hidden="true">›</span>
  </a>
);
export function Savings() {
  return (
    <section id="savings" className="editorial">
      <h2>Ways to save on iPhone</h2>
      <div className="tile trade-tile">
        <div className="tile-copy">
          <h3>
            Trade in your current phone
            <br />
            for credit toward a new one.
          </h3>
          <p>
            Get $200–$600 in credit when you trade in iPhone 11 or higher and
            upgrade to iPhone 14 or iPhone 14 Pro.<sup>1</sup>
          </p>
          <A href="https://www.apple.com/shop/trade-in">Learn more</A>
        </div>
        <Media id={1901} alt="Trade an older iPhone for a new iPhone" />
      </div>
      <div className="two-up">
        <article className="tile carrier-tile">
          <h3>
            Save up to $800 with select
            <br />
            carrier deals at Apple.<sup>8</sup>
          </h3>
          <p>
            Get the carrier deals you love and save on a new iPhone when you
            trade in and purchase right here at Apple.
          </p>
          <A href="https://www.apple.com/shop/buy-iphone/carrier-offers">
            Find your deal
          </A>
          <div className="carriers">
            {[
              [1919, 800, "AT&T"],
              [1923, 400, "T-Mobile"],
              [1927, 800, "Verizon"],
            ].map(([id, price, name]) => (
              <div key={id}>
                <Media id={id} alt={name} />
                <small>
                  Get up to ${price}
                  <br />
                  credit after trade-in
                </small>
              </div>
            ))}
          </div>
        </article>
        <article className="tile card-tile">
          <h3>
            Get 3% Daily Cash
            <br />
            back with Apple Card.
          </h3>
          <p>
            And pay for your new iPhone over 24 months, interest-free when you
            choose to check out with Apple Card Monthly Installments.**
          </p>
          <A href="https://www.apple.com/apple-card/">Learn more</A>
          <Media id={1938} alt="Apple Card and Wallet on iPhone" />
        </article>
      </div>
      <article className="tile why-tile">
        <Media id={1939} alt="iPhone models in different finishes" />
        <div className="tile-copy">
          <h3>
            Why Apple is the best
            <br />
            place to buy iPhone.
          </h3>
          <p>
            You can choose a payment option that works for you, pay less with a
            trade-in, connect your new iPhone to your carrier, and get set up
            quickly.
            <br />
            You can also chat with a Specialist anytime.
          </p>
          <A href="https://www.apple.com/iphone/buy/">Learn more</A>
        </div>
      </article>
    </section>
  );
}
export function Accessories() {
  return (
    <section id="accessories" className="editorial accessories">
      <h2>Featured accessories</h2>
      <article className="tile accessory split-tile">
        <div>
          <h3>MagSafe</h3>
          <p>
            Snap on a magnetic case,
            <br />
            wallet, or both. And get faster
            <br />
            wireless charging.
          </p>
          <A href="https://www.apple.com/shop/accessories/all/magsafe">
            Shop MagSafe accessories
          </A>
        </div>
        <Media id={1956} alt="MagSafe wallet, charger and battery pack" />
      </article>
      <article id="airtag" className="tile accessory split-tile reversed">
        <Media id={1968} alt="AirTag with colorful key rings" />
        <div>
          <h3>AirTag</h3>
          <p>
            Attach one to your keys. Put another in your backpack. If they’re
            misplaced, just use the Find My app.
          </p>
          <div className="actions">
            <A href="https://www.apple.com/shop/buy-airtag/airtag">Buy</A>
            <A href="https://www.apple.com/airtag/">Learn more</A>
          </div>
        </div>
      </article>
      <article id="airpods" className="tile airpods-tile">
        <div>
          <h3>
            Magic runs
            <br />
            in the family.
          </h3>
          <p>
            Explore all AirPods models and
            <br />
            find the best ones for you.
          </p>
          <A href="https://www.apple.com/airpods/">Learn more</A>
        </div>
        <Media id={1976} alt="AirPods, AirPods Pro, and AirPods Max" />
      </article>
      <p className="section-link">
        <A href="https://www.apple.com/shop/iphone/accessories">
          Shop all iPhone accessories
        </A>
      </p>
    </section>
  );
}
export function Benefits() {
  return (
    <section className="benefits" aria-label="Shopping benefits">
      {[
        [
          1987,
          "Fast, free delivery",
          "Or pick up available items at an Apple Store.",
          "https://www.apple.com/shop/shipping-pickup",
        ],
        [
          1990,
          "Pay monthly at 0% APR",
          "You can pay over time when you choose to check out with Apple Card Monthly Installments.**",
          "https://www.apple.com/apple-card/monthly-installments/",
        ],
        [
          2003,
          "Get help buying",
          "Have a question? Call a Specialist or chat online. Call 1-800-MY-APPLE.",
          "https://www.apple.com/shop/help",
        ],
      ].map(([id, title, copy, href]) => (
        <article key={id}>
          <Media id={id} />
          <h3>{title}</h3>
          <p>{copy}</p>
          <A href={href}>Learn more</A>
        </article>
      ))}
    </section>
  );
}
export function Experience() {
  return (
    <section className="editorial experience">
      <h2>What makes an iPhone an iPhone?</h2>
      <article id="ios" className="tile ios-tile">
        <Media id={2007} alt="Personalized iOS 16 Lock Screens" />
        <div className="tile-copy">
          <h3>iOS 16</h3>
          <p>Personal is powerful.</p>
          <A href="https://www.apple.com/ios/">Learn more</A>
        </div>
      </article>
      <article className="tile switch-tile">
        <h3>
          Switching to iPhone
          <br />
          is super simple.
        </h3>
        <A href="https://www.apple.com/iphone/switch/">Learn more</A>
        <Media id={2020} alt="A collection of iPhone apps and features" />
      </article>
    </section>
  );
}
const serviceCards = [
  {
    id: "news",
    logo: 2107,
    image: 2105,
    title: "Apple News+",
    copy: "Get 3 months of Apple News+ free when you buy an iPhone.",
    href: "https://www.apple.com/apple-news/",
  },
  {
    id: "arcade",
    logo: 2117,
    image: 2113,
    title: "Apple Arcade",
    copy: "Get 3 months of Apple Arcade free when you buy an iPhone.",
    href: "https://www.apple.com/apple-arcade/",
  },
  {
    id: "fitness",
    logo: 2130,
    image: 2139,
    title: "Apple Fitness+",
    copy: "Fitness for everyone. Now all you need is iPhone.",
    href: "https://www.apple.com/apple-fitness-plus/",
  },
  {
    id: "gift",
    logo: 2142,
    image: 2150,
    title: "Apple Gift Card",
    copy: "For everything and everyone.",
    href: "https://www.apple.com/apple-gift-card/",
  },
];
export function Services() {
  return (
    <section id="services" className="editorial services">
      <h2>Get more out of your iPhone.</h2>
      <article className="tile one-tile split-tile">
        <Media id={2027} alt="Six Apple services in one bundle" />
        <div>
          <Media id={2029} alt="Apple One" className="service-logo" />
          <h3>
            Bundle up to six Apple services.
            <br />
            And enjoy more for less.
          </h3>
          <div className="actions">
            <A href="https://www.apple.com/apple-one/">
              Try it free<sup>9</sup>
            </A>
            <A href="https://www.apple.com/apple-one/">Learn more</A>
          </div>
        </div>
      </article>
      <div className="two-up">
        <article className="tile service-card tv-card">
          <Media id={2040} alt="Apple TV+" className="service-logo" />
          <p>
            Get 3 months of Apple TV+ free
            <br />
            when you buy an iPhone.<sup>10</sup>
          </p>
          <div className="actions">
            <A href="https://tv.apple.com/">Try it free ↗</A>
            <A href="https://www.apple.com/apple-tv-plus/">Learn more</A>
          </div>
          <div className="shows">
            {[2050, 2052, 2057, 2062, 2067, 2072].map((id, i) => (
              <a
                href="https://tv.apple.com/"
                key={id}
                aria-label={`Explore Apple TV+ show ${i + 1}`}
              >
                <Media
                  id={id}
                  alt={
                    [
                      "Dear…",
                      "Ted Lasso",
                      "My Kind of Country",
                      "Extrapolations",
                      "Pinecone & Pony",
                      "Bad Sisters",
                    ][i]
                  }
                />
              </a>
            ))}
          </div>
        </article>
        <article className="tile service-card music-card">
          <h3 className="music-logo">
            <AppleMark /> Music
          </h3>
          <p>
            Over 100 million songs.
            <br />
            Start listening for free today.
          </p>
          <div className="actions">
            <A href="https://music.apple.com/">
              Try it free<sup>11</sup>
            </A>
            <A href="https://www.apple.com/apple-music/">Learn more</A>
          </div>
          <div className="album-art">
            {[2100, 2102, 2104].map((id) => (
              <Media id={id} key={id} alt="Apple Music playlist artwork" />
            ))}
          </div>
        </article>
        {serviceCards.map((s) => (
          <article className={`tile service-card ${s.id}-card`} key={s.id}>
            <Media id={s.logo} alt={s.title} className="service-logo" />
            <p>{s.copy}</p>
            <div className="actions">
              <A href={s.href}>Learn more</A>
              {s.id !== "news" && (
                <A href={s.href}>{s.id === "gift" ? "Buy" : "Try it free"}</A>
              )}
            </div>
            <Media
              id={s.image}
              alt={s.title + " on iPhone"}
              className="service-art"
            />
          </article>
        ))}
      </div>
      <article className="tile research-tile split-tile">
        <div>
          <h3>
            Introducing
            <br />
            the Apple
            <br />
            Research app.
          </h3>
          <p>The future of health research is you.</p>
          <A href="https://www.apple.com/ios/research-app/">Learn more</A>
        </div>
        <Media id={2159} alt="Apple Research app studies on iPhone" />
      </article>
    </section>
  );
}

import footnotes from "../data/footnotes.json";
import { AppleMark } from "./Media";
const groups = [
  [
    "Shop and Learn",
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "AirPods",
    "TV & Home",
    "AirTag",
    "Accessories",
    "Gift Cards",
  ],
  ["Account", "Manage Your Apple ID", "Apple Store Account", "iCloud.com"],
  [
    "Entertainment",
    "Apple One",
    "Apple TV+",
    "Apple Music",
    "Apple Arcade",
    "Apple Fitness+",
    "Apple News+",
    "Apple Podcasts",
    "Apple Books",
    "App Store",
  ],
  [
    "Apple Store",
    "Find a Store",
    "Genius Bar",
    "Today at Apple",
    "Apple Camp",
    "Apple Store App",
    "Certified Refurbished",
    "Apple Trade In",
    "Financing",
    "Carrier Deals at Apple",
    "Order Status",
    "Shopping Help",
  ],
  ["For Business", "Apple and Business", "Shop for Business"],
  ["For Education", "Apple and Education", "Shop for K-12", "Shop for College"],
  [
    "Apple Values",
    "Accessibility",
    "Education",
    "Environment",
    "Inclusion and Diversity",
    "Privacy",
    "Racial Equity and Justice",
    "Supplier Responsibility",
  ],
  [
    "About Apple",
    "Newsroom",
    "Apple Leadership",
    "Career Opportunities",
    "Investors",
    "Ethics & Compliance",
    "Events",
    "Contact Apple",
  ],
];
const links = {
  Store: "https://www.apple.com/store",
  Mac: "https://www.apple.com/mac/",
  iPad: "https://www.apple.com/ipad/",
  iPhone: "#top",
  Watch: "https://www.apple.com/watch/",
  AirPods: "#airpods",
  Accessories: "#accessories",
  "Apple One": "https://www.apple.com/apple-one/",
  "Apple Music": "https://music.apple.com/",
  "iCloud.com": "https://www.icloud.com/",
  Privacy: "https://www.apple.com/privacy/",
};
export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footnotes" id="footnotes">
          {footnotes.map((t, i) => (
            <p key={i}>{t}</p>
          ))}
        </div>
        <div className="breadcrumb">
          <AppleMark />
          <span>›</span>
          <span>iPhone</span>
        </div>
        <div className="footer-grid">
          {[
            [
              groups[0],
              [
                "Apple Wallet",
                "Wallet",
                "Apple Card",
                "Apple Pay",
                "Apple Cash",
              ],
            ],
            [groups[1], groups[2]],
            [groups[3]],
            [
              groups[4],
              groups[5],
              [
                "For Healthcare",
                "Apple in Healthcare",
                "Health on Apple Watch",
                "Health Records on iPhone",
              ],
              [
                "For Government",
                "Shop for Government",
                "Shop for Veterans and Military",
              ],
            ],
            [groups[6], groups[7]],
          ].map((col, i) => (
            <div key={i}>
              {col.map(([title, ...items]) => (
                <details key={title} open>
                  <summary>{title}</summary>
                  <ul>
                    {items.map((item) => (
                      <li key={item}>
                        <a
                          href={
                            links[item] ||
                            `https://www.apple.com/search/${encodeURIComponent(item)}`
                          }
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          ))}
        </div>
        <p className="more-shop">
          More ways to shop:{" "}
          <a href="https://www.apple.com/retail/">Find an Apple Store</a> or{" "}
          <a href="https://locate.apple.com/">other retailer</a> near you. Or
          call 1-800-MY-APPLE.
        </p>
        <div className="copyright">
          <span>Copyright © 2023 Apple Inc. All rights reserved.</span>
          <div>
            {[
              "Privacy Policy",
              "Terms of Use",
              "Sales and Refunds",
              "Legal",
              "Site Map",
            ].map((t) => (
              <a
                key={t}
                href={
                  t === "Site Map"
                    ? "https://www.apple.com/sitemap/"
                    : "https://www.apple.com/legal/"
                }
              >
                {t}
              </a>
            ))}
          </div>
          <span>United States</span>
        </div>
      </div>
    </footer>
  );
}

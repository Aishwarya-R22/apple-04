import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import {
  products,
  storageOptions,
  priceFor,
} from "../web/src/data/products.js";

test("offered configurations use the intended storage and USD prices", () => {
  const expected = {
    pro: [999, 1099, 1299],
    14: [799, 899, 1099],
    13: [599, 699, 899],
    se: [429, 479, 579],
  };
  for (const p of products) {
    assert.deepEqual(
      storageOptions(p),
      p.id === "se" ? [64, 128, 256] : [128, 256, 512],
    );
    assert.deepEqual(
      storageOptions(p).map((s) => priceFor(p, s)),
      expected[p.id],
    );
    assert.equal(p.colors.length, p.hex.length);
  }
});
test("web and native catalogues remain synchronized", () => {
  assert.equal(
    readFileSync(
      new URL("../mobile/src/data/products.js", import.meta.url),
      "utf8",
    ),
    readFileSync(
      new URL("../web/src/data/products.js", import.meta.url),
      "utf8",
    ),
  );
});
test("every mapped product asset is packaged locally", () => {
  const assets = JSON.parse(
    readFileSync(
      new URL("../web/src/data/assets.json", import.meta.url),
      "utf8",
    ),
  );
  for (const asset of Object.values(assets)) {
    assert.ok(
      existsSync(
        new URL("../web/public/images/" + asset.file, import.meta.url),
      ),
      asset.file,
    );
    assert.ok(
      existsSync(new URL("../mobile/assets/" + asset.file, import.meta.url)),
      asset.file,
    );
  }
});

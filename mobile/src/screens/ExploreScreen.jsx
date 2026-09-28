import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Pressable,
  StyleSheet,
} from "react-native";
import { Picture, Button, ExternalLink } from "../components/UI";
import { products, money } from "../data/products";
import { theme as t } from "../theme";
export default function ExploreScreen({ onProduct, onCompare }) {
  const [query, setQuery] = useState("");
  const matches = products.filter((p) =>
    (p.name + " " + p.colors.join(" "))
      .toLowerCase()
      .includes(query.toLowerCase().trim()),
  );
  return (
    <ScrollView
      contentContainerStyle={s.content}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={s.kicker}>THE IPHONE COLLECTION</Text>
      <Text style={s.title}>Find your favorite.</Text>
      <TextInput
        accessibilityLabel="Search iPhone models or colors"
        placeholder="Search iPhone models or colors"
        placeholderTextColor={t.muted}
        value={query}
        onChangeText={setQuery}
        style={s.search}
      />
      {query.trim() ? (
        <View>
          {matches.length ? (
            matches.map((p) => (
              <Pressable
                key={p.id}
                accessibilityRole="button"
                accessibilityLabel={`Explore ${p.name}`}
                style={s.result}
                onPress={() => onProduct(p)}
              >
                <Picture id={p.image} style={{ width: 70, height: 90 }} />
                <View>
                  <Text style={s.productTitle}>{p.name}</Text>
                  <Text style={s.copy}>From {money(p.price)}</Text>
                </View>
              </Pressable>
            ))
          ) : (
            <Text style={s.copy}>
              No matches. Try “iPhone 14”, “SE”, or “Blue”.
            </Text>
          )}
        </View>
      ) : (
        <>
          <View style={s.hero}>
            <Text style={s.new}>New</Text>
            <Text style={s.productTitle}>iPhone 14</Text>
            <Text style={s.heroTitle}>
              Two great sizes.{"\n"}Now with a splash{"\n"}of yellow.
            </Text>
            <Picture
              id={1855}
              label="iPhone 14 in six colors"
              style={{ height: 210, marginVertical: 25 }}
            />
            <Text style={s.copy}>From $799 or $33.29/mo.</Text>
            <Button onPress={() => onProduct(products[1])}>
              Explore iPhone 14
            </Button>
          </View>
          <View style={[s.hero, s.dark]}>
            <Text style={[s.productTitle, s.white]}>iPhone 14 Pro</Text>
            <Text style={[s.heroTitle, s.white]}>Pro. Beyond.</Text>
            <Picture
              id={1869}
              label="iPhone 14 Pro"
              style={{ height: 180, marginVertical: 25 }}
            />
            <Text style={[s.copy, { color: "#aaa" }]}>From $999</Text>
            <Button onPress={() => onProduct(products[0])}>
              Explore iPhone 14 Pro
            </Button>
          </View>
          <View style={s.hero}>
            <Text style={s.productTitle}>iPhone SE</Text>
            <Text style={[s.heroTitle, { color: "#3157b7" }]}>
              Love the power.{"\n"}Love the price.
            </Text>
            <Picture
              id={1884}
              label="iPhone SE"
              style={{ height: 280, marginVertical: 18 }}
            />
            <Text style={s.copy}>From $429</Text>
            <Button onPress={() => onProduct(products[3])}>
              Explore iPhone SE
            </Button>
          </View>
          <Text style={s.sectionTitle}>Which one is you?</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 14, paddingBottom: 12 }}
          >
            {products.map((p) => (
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={`Explore ${p.name}`}
                key={p.id}
                style={s.miniCard}
                onPress={() => onProduct(p)}
              >
                <Picture id={p.image} style={{ height: 150, width: 160 }} />
                <Text style={s.miniTitle}>{p.name}</Text>
                <Text style={s.copy}>From {money(p.price)}</Text>
              </Pressable>
            ))}
          </ScrollView>
          <Button secondary onPress={onCompare}>
            Compare all models ›
          </Button>
          <Text style={s.sectionTitle}>More reasons to love iPhone.</Text>
          <View style={s.hero}>
            <Picture
              id={1889}
              label="A guided tour of iPhone 14"
              style={{ height: 200, borderRadius: 18 }}
            />
            <Text style={s.cardTitle}>
              A Guided Tour of{"\n"}iPhone 14 & iPhone 14 Pro
            </Text>
            <ExternalLink href="https://www.apple.com/iphone/">
              Explore the guided tour
            </ExternalLink>
          </View>
          <View style={s.hero}>
            <Text style={s.cardTitle}>Ways to save on iPhone.</Text>
            <Text style={s.copy}>
              Trade in your current phone for credit toward a new one.
            </Text>
            <Picture id={1901} style={{ height: 115 }} />
            <ExternalLink href="https://www.apple.com/shop/trade-in">
              Explore trade-in
            </ExternalLink>
            <Text style={s.copy}>
              Save with select carrier deals, or explore Apple Card Monthly
              Installments.
            </Text>
            <ExternalLink href="https://www.apple.com/shop/buy-iphone/carrier-offers">
              Carrier deals
            </ExternalLink>
            <ExternalLink href="https://www.apple.com/apple-card/">
              Apple Card
            </ExternalLink>
          </View>
          <Text style={s.sectionTitle}>A perfect pairing.</Text>
          {[
            [
              1956,
              "MagSafe",
              "Snap on a case, wallet, or both.",
              "https://www.apple.com/shop/accessories/all/magsafe",
            ],
            [
              1968,
              "AirTag",
              "A little help finding your everyday things.",
              "https://www.apple.com/airtag/",
            ],
            [
              1976,
              "AirPods",
              "Magic runs in the family.",
              "https://www.apple.com/airpods/",
            ],
          ].map(([id, title, copy, href]) => (
            <View style={s.hero} key={id}>
              <Picture id={id} style={{ height: 210 }} />
              <Text style={s.cardTitle}>{title}</Text>
              <Text style={s.copy}>{copy}</Text>
              <ExternalLink href={href}>Explore {title}</ExternalLink>
            </View>
          ))}
          <View style={s.hero}>
            <Text style={s.cardTitle}>Personal is powerful.</Text>
            <Picture id={2007} style={{ height: 200 }} />
            <ExternalLink href="https://www.apple.com/ios/">
              Explore iOS
            </ExternalLink>
            <Text style={s.cardTitle}>Switching is super simple.</Text>
            <Picture id={2020} style={{ height: 170 }} />
            <ExternalLink href="https://www.apple.com/iphone/switch/">
              Switch to iPhone
            </ExternalLink>
          </View>
          <Text style={s.sectionTitle}>Get more out of your iPhone.</Text>
          <View style={s.hero}>
            <Picture id={2027} style={{ height: 180 }} />
            <Text style={s.cardTitle}>All together. Better.</Text>
            <Text style={s.copy}>
              Bundle up to six Apple services with Apple One.
            </Text>
            <ExternalLink href="https://www.apple.com/apple-one/">
              Explore Apple One
            </ExternalLink>
          </View>
          {[
            [
              2052,
              "Apple TV+",
              "Original stories. Unforgettable characters.",
              "https://tv.apple.com/",
            ],
            [
              2102,
              "Apple Music",
              "Over 100 million songs.",
              "https://music.apple.com/",
            ],
            [
              2105,
              "Apple News+",
              "The publications you love.",
              "https://www.apple.com/apple-news/",
            ],
            [
              2113,
              "Apple Arcade",
              "A world of games.",
              "https://www.apple.com/apple-arcade/",
            ],
            [
              2139,
              "Apple Fitness+",
              "Fitness for everyone.",
              "https://www.apple.com/apple-fitness-plus/",
            ],
            [
              2150,
              "Apple Gift Card",
              "For everything and everyone.",
              "https://www.apple.com/apple-gift-card/",
            ],
            [
              2159,
              "Apple Research",
              "The future of health research is you.",
              "https://www.apple.com/ios/research-app/",
            ],
          ].map(([id, title, copy, href]) => (
            <View style={s.hero} key={id}>
              <Picture id={id} style={{ height: 190 }} />
              <Text style={s.cardTitle}>{title}</Text>
              <Text style={s.copy}>{copy}</Text>
              <ExternalLink href={href}>Learn more</ExternalLink>
            </View>
          ))}
          <View style={s.hero}>
            <Text style={s.cardTitle}>Here to help.</Text>
            <Text style={s.copy}>
              Fast, free delivery. Flexible payments. Help from a Specialist.
            </Text>
            <ExternalLink href="https://www.apple.com/shop/help">
              Shopping help
            </ExternalLink>
          </View>
          <Text style={s.footnote}>
            Prices and product information reflect the supplied design.
            Selections are saved locally; no orders or payments are processed.
          </Text>
        </>
      )}
    </ScrollView>
  );
}
const s = StyleSheet.create({
  content: {
    padding: 20,
    paddingBottom: 32,
    maxWidth: 700,
    width: "100%",
    alignSelf: "center",
  },
  kicker: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 2,
    color: t.muted,
    marginTop: 16,
  },
  title: {
    fontSize: 35,
    fontWeight: "700",
    letterSpacing: -1.3,
    marginTop: 8,
    marginBottom: 22,
    color: t.ink,
  },
  search: {
    backgroundColor: "#e9e9ed",
    padding: 15,
    borderRadius: 14,
    fontSize: 16,
    marginBottom: 24,
    color: t.ink,
  },
  hero: {
    backgroundColor: "white",
    borderRadius: 26,
    padding: 25,
    alignItems: "center",
    marginBottom: 16,
    overflow: "hidden",
  },
  dark: { backgroundColor: "#000" },
  white: { color: "white" },
  new: { color: "#bf4800", fontSize: 13, marginBottom: 12 },
  productTitle: { fontSize: 20, fontWeight: "600", color: t.ink },
  heroTitle: {
    fontSize: 32,
    lineHeight: 35,
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: -1,
    marginTop: 14,
    color: t.ink,
  },
  copy: {
    fontSize: 15,
    lineHeight: 23,
    color: t.muted,
    textAlign: "center",
    marginVertical: 12,
  },
  sectionTitle: {
    fontSize: 29,
    lineHeight: 33,
    fontWeight: "700",
    letterSpacing: -0.8,
    marginTop: 32,
    marginBottom: 22,
    color: t.ink,
  },
  miniCard: {
    backgroundColor: "white",
    borderRadius: 22,
    padding: 20,
    alignItems: "center",
  },
  miniTitle: { fontSize: 18, fontWeight: "600", marginTop: 20 },
  cardTitle: {
    fontSize: 25,
    lineHeight: 30,
    fontWeight: "700",
    letterSpacing: -0.6,
    textAlign: "center",
    marginTop: 18,
    color: t.ink,
  },
  result: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
    backgroundColor: "white",
    borderRadius: 18,
    padding: 18,
    marginBottom: 12,
  },
  footnote: {
    fontSize: 12,
    lineHeight: 18,
    color: t.muted,
    textAlign: "center",
    margin: 20,
  },
});

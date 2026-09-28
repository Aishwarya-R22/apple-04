import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  StatusBar,
  BackHandler,
  ActivityIndicator,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ExploreScreen from "./src/screens/ExploreScreen";
import CompareScreen from "./src/screens/CompareScreen";
import BagScreen from "./src/screens/BagScreen";
import ProductSheet from "./src/components/ProductSheet";
import { theme as t } from "./src/theme";
import { products } from "./src/data/products";
export default function App() {
  const [tab, setTab] = useState("Explore");
  const [product, setProduct] = useState(null);
  const [bag, setBag] = useState([]);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    AsyncStorage.getItem("apple04-bag")
      .then((value) => {
        if (value) {
          const parsed = JSON.parse(value);
          if (Array.isArray(parsed))
            setBag(
              parsed.filter(
                (x) =>
                  products.some((p) => p.id === x.productId) &&
                  Number.isFinite(x.price) &&
                  typeof x.color === "string",
              ),
            );
        }
      })
      .catch(() => {})
      .finally(() => setReady(true));
  }, []);
  useEffect(() => {
    if (ready)
      AsyncStorage.setItem("apple04-bag", JSON.stringify(bag)).catch(() => {});
  }, [bag, ready]);
  useEffect(() => {
    const listener = BackHandler.addEventListener("hardwareBackPress", () => {
      if (tab !== "Explore") {
        setTab("Explore");
        return true;
      }
      return false;
    });
    return () => listener.remove();
  }, [tab]);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.app} edges={["top", "bottom", "left", "right"]}>
        <StatusBar barStyle="dark-content" />
        <View style={s.header}>
          <Text style={s.brand}>iPhone</Text>
          <Text style={s.headerCaption}>
            {tab === "Explore"
              ? "Made for you."
              : tab === "Compare"
                ? "Side by side."
                : `${bag.length} ${bag.length === 1 ? "item" : "items"}`}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          {!ready ? (
            <ActivityIndicator style={{ marginTop: 80 }} color={t.blue} />
          ) : tab === "Explore" ? (
            <ExploreScreen
              onProduct={setProduct}
              onCompare={() => setTab("Compare")}
            />
          ) : tab === "Compare" ? (
            <CompareScreen onProduct={setProduct} />
          ) : (
            <BagScreen
              items={bag}
              onRemove={(i) => setBag(bag.filter((_, j) => i !== j))}
              onExplore={() => setTab("Explore")}
            />
          )}
        </View>
        <View style={s.tabs} accessibilityRole="tablist">
          {[
            ["Explore", "◉"],
            ["Compare", "▥"],
            ["Bag", "▢"],
          ].map(([label, icon]) => (
            <Pressable
              key={label}
              accessibilityRole="tab"
              accessibilityState={{ selected: tab === label }}
              accessibilityLabel={
                label === "Bag" ? `Bag, ${bag.length} items` : label
              }
              onPress={() => setTab(label)}
              style={s.tab}
            >
              <Text
                style={[s.tabIcon, { color: tab === label ? t.blue : t.muted }]}
              >
                {icon}
                {label === "Bag" && bag.length > 0 ? ` ${bag.length}` : ""}
              </Text>
              <Text
                style={[
                  s.tabLabel,
                  { color: tab === label ? t.blue : t.muted },
                ]}
              >
                {label}
              </Text>
            </Pressable>
          ))}
        </View>
        {product && (
          <ProductSheet
            key={product.id}
            product={product}
            onClose={() => setProduct(null)}
            onAdd={(item) => {
              setBag([...bag, item]);
              setProduct(null);
              setTab("Bag");
            }}
          />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const s = StyleSheet.create({
  app: { flex: 1, backgroundColor: t.background },
  header: {
    height: 58,
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  brand: { fontSize: 25, fontWeight: "700", letterSpacing: -1, color: t.ink },
  headerCaption: { fontSize: 13, color: t.muted },
  tabs: {
    flexDirection: "row",
    backgroundColor: "white",
    borderTopWidth: 1,
    borderColor: "#e5e5ea",
    paddingTop: 6,
    paddingBottom: 6,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 56,
    gap: 3,
  },
  tabIcon: { fontSize: 24 },
  tabLabel: { fontSize: 11, fontWeight: "600" },
});

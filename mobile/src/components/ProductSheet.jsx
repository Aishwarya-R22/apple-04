import React, { useState } from "react";
import {
  Modal,
  View,
  ScrollView,
  Text,
  Pressable,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picture, Button } from "./UI";
import { money, priceFor, storageOptions } from "../data/products";
import { theme as t } from "../theme";
export default function ProductSheet({ product, onClose, onAdd }) {
  const [color, setColor] = useState(product.colors[0]);
  const [storage, setStorage] = useState(storageOptions(product)[0]);
  return (
    <Modal
      visible
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={s.header}>
          <Text style={s.heading}>{product.name}</Text>
          <Button
            secondary
            onPress={onClose}
            accessibilityLabel="Close product details"
          >
            Done
          </Button>
        </View>
        <ScrollView contentContainerStyle={s.content}>
          <Picture
            id={product.image}
            label={product.name}
            style={{ height: 250 }}
          />
          <Text style={s.title}>{product.tagline}</Text>
          <Text style={s.description}>
            {product.display} {product.screen}.{"\n"}
            {product.camera}. {product.chip}.
          </Text>
          <Text style={s.label}>Finish — {color}</Text>
          <View style={s.colors}>
            {product.colors.map((c, i) => (
              <Pressable
                key={c}
                accessibilityRole="button"
                accessibilityLabel={c}
                accessibilityState={{ selected: c === color }}
                onPress={() => setColor(c)}
                style={[
                  s.swatch,
                  { backgroundColor: product.hex[i] },
                  color === c && { borderColor: t.blue, borderWidth: 3 },
                ]}
              />
            ))}
          </View>
          <Text style={s.label}>How much space do you need?</Text>
          <View style={s.storage}>
            {storageOptions(product).map((v) => (
              <Pressable
                key={v}
                accessibilityRole="button"
                accessibilityState={{ selected: storage === v }}
                onPress={() => setStorage(v)}
                style={[
                  s.storageOption,
                  storage === v && { borderColor: t.blue, borderWidth: 2 },
                ]}
              >
                <Text style={{ fontSize: 16, fontWeight: "600" }}>{v} GB</Text>
              </Pressable>
            ))}
          </View>
          <Text style={s.price}>{money(priceFor(product, storage))}</Text>
          <Button
            onPress={() =>
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
          </Button>
          <Text style={s.note}>
            Product overview shown. Your chosen finish is recorded in the bag.
            No order or payment is submitted.
          </Text>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}
const s = StyleSheet.create({
  header: {
    paddingHorizontal: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  heading: { fontSize: 20, fontWeight: "700" },
  content: {
    padding: 25,
    paddingBottom: 35,
    width: "100%",
    maxWidth: 650,
    alignSelf: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 20,
    letterSpacing: -0.7,
  },
  description: {
    color: t.muted,
    fontSize: 15,
    lineHeight: 23,
    textAlign: "center",
    marginVertical: 20,
  },
  label: { fontSize: 17, fontWeight: "600", marginTop: 20, marginBottom: 16 },
  colors: { flexDirection: "row", flexWrap: "wrap", gap: 12 },
  swatch: {
    height: 46,
    width: 46,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: "#d2d2d7",
  },
  storage: { flexDirection: "row", gap: 10 },
  storageOption: {
    flex: 1,
    paddingVertical: 18,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 13,
    alignItems: "center",
  },
  price: { fontSize: 30, fontWeight: "700", marginVertical: 24 },
  note: {
    fontSize: 12,
    lineHeight: 18,
    color: t.muted,
    textAlign: "center",
    marginTop: 18,
  },
});

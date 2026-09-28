import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet, Pressable } from "react-native";
import { products, money } from "../data/products";
import { Picture, Button } from "../components/UI";
import { theme as t } from "../theme";
export default function CompareScreen({ onProduct }) {
  const [selected, setSelected] = useState(["pro", "14"]);
  function toggle(id) {
    if (selected.includes(id)) {
      if (selected.length > 1) setSelected(selected.filter((x) => x !== id));
    } else setSelected([...selected.slice(-1), id]);
  }
  return (
    <ScrollView contentContainerStyle={s.content}>
      <Text style={s.title}>Find your fit.</Text>
      <Text style={s.intro}>Choose up to two models to compare.</Text>
      <View style={s.chips}>
        {products.map((p) => (
          <Pressable
            accessibilityRole="button"
            accessibilityState={{ selected: selected.includes(p.id) }}
            onPress={() => toggle(p.id)}
            key={p.id}
            style={[s.chip, selected.includes(p.id) && s.active]}
          >
            <Text
              style={{
                color: selected.includes(p.id) ? "white" : t.ink,
                fontWeight: "600",
              }}
            >
              {p.name}
            </Text>
          </Pressable>
        ))}
      </View>
      <View style={s.columns}>
        {selected.map((id) => {
          const p = products.find((x) => x.id === id);
          return (
            <View key={id} style={s.column}>
              <Picture id={p.image} label={p.name} style={{ height: 170 }} />
              <Text style={s.name}>{p.name}</Text>
              <Text style={s.price}>From {money(p.price)}</Text>
              <Button
                onPress={() => onProduct(p)}
                style={{ paddingHorizontal: 10 }}
              >
                Choose
              </Button>
              {[
                ["Display", p.display + "\n" + p.screen],
                ["Camera", p.camera + "\n" + p.lens],
                ["Battery", `Up to ${p.battery} hours\nvideo playback`],
                ["Performance", p.chip],
                ["Security", p.id === "se" ? "Touch ID" : "Face ID"],
                ["Connectivity", "5G cellular"],
                [
                  "Safety",
                  p.new
                    ? "Emergency SOS via satellite\nCrash Detection"
                    : "Emergency SOS",
                ],
              ].map(([label, value]) => (
                <View style={s.spec} key={label}>
                  <Text style={s.label}>{label}</Text>
                  <Text style={s.value}>{value}</Text>
                </View>
              ))}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
const s = StyleSheet.create({
  content: {
    padding: 20,
    paddingBottom: 35,
    maxWidth: 700,
    width: "100%",
    alignSelf: "center",
  },
  title: {
    fontSize: 35,
    fontWeight: "700",
    letterSpacing: -1,
    marginTop: 18,
    color: t.ink,
  },
  intro: { fontSize: 16, color: t.muted, marginTop: 12, marginBottom: 24 },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: 9, marginBottom: 25 },
  chip: {
    padding: 13,
    borderRadius: 22,
    backgroundColor: "#e5e5ea",
    minHeight: 44,
  },
  active: { backgroundColor: t.ink },
  columns: { flexDirection: "row", gap: 12 },
  column: {
    flex: 1,
    minWidth: 0,
    backgroundColor: "white",
    borderRadius: 23,
    padding: 12,
    alignItems: "stretch",
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 18,
    minHeight: 44,
  },
  price: {
    fontSize: 14,
    color: t.muted,
    textAlign: "center",
    marginBottom: 18,
  },
  spec: {
    borderTopWidth: 1,
    borderColor: "#eee",
    marginTop: 18,
    paddingTop: 18,
    minHeight: 115,
  },
  label: { color: t.muted, fontSize: 12, textAlign: "center", marginBottom: 9 },
  value: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "500",
    textAlign: "center",
    color: t.ink,
  },
});

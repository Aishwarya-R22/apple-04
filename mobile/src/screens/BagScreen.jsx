import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Picture, Button } from "../components/UI";
import { money } from "../data/products";
import { theme as t } from "../theme";
export default function BagScreen({ items, onRemove, onExplore }) {
  return (
    <ScrollView contentContainerStyle={s.content}>
      <Text style={s.title}>Your bag.</Text>
      {items.length ? (
        <>
          {items.map((item, i) => (
            <View style={s.row} key={i}>
              <Picture
                id={item.image}
                label={item.name}
                style={{ width: 70, height: 105 }}
              />
              <View style={{ flex: 1 }}>
                <Text style={s.name}>{item.name}</Text>
                <Text style={s.copy}>
                  {item.color} · {item.storage} GB
                </Text>
                <Text style={s.name}>{money(item.price)}</Text>
                <Button
                  secondary
                  onPress={() => onRemove(i)}
                  accessibilityLabel={`Remove ${item.name} from bag`}
                  style={{ alignSelf: "flex-start", paddingHorizontal: 0 }}
                >
                  Remove
                </Button>
              </View>
            </View>
          ))}
          <View style={s.total}>
            <Text style={s.name}>Total</Text>
            <Text style={s.name}>
              {money(items.reduce((s, x) => s + x.price, 0))}
            </Text>
          </View>
          <Text style={s.note}>
            Your bag is saved on this device. No order or payment is submitted.
          </Text>
          <Button onPress={onExplore}>Keep exploring</Button>
        </>
      ) : (
        <View style={s.empty}>
          <Text style={s.emptyIcon}>＋</Text>
          <Text style={s.name}>A little room for something great.</Text>
          <Text style={s.copy}>
            Your bag is empty. Find your favorite iPhone.
          </Text>
          <Button onPress={onExplore}>Explore iPhone</Button>
        </View>
      )}
    </ScrollView>
  );
}
const s = StyleSheet.create({
  content: {
    padding: 22,
    paddingBottom: 40,
    maxWidth: 700,
    width: "100%",
    alignSelf: "center",
  },
  title: {
    fontSize: 35,
    fontWeight: "700",
    letterSpacing: -1,
    color: t.ink,
    marginTop: 18,
    marginBottom: 28,
  },
  row: {
    flexDirection: "row",
    gap: 20,
    backgroundColor: "white",
    borderRadius: 23,
    padding: 20,
    marginBottom: 14,
  },
  name: { fontSize: 19, fontWeight: "600", color: t.ink },
  copy: { fontSize: 14, color: t.muted, lineHeight: 21, marginVertical: 12 },
  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 22,
  },
  note: { fontSize: 13, lineHeight: 20, color: t.muted, marginBottom: 25 },
  empty: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 30,
    borderRadius: 26,
    marginTop: 35,
  },
  emptyIcon: { fontSize: 56, color: t.blue, marginBottom: 24 },
});

import React from "react";
import {
  Pressable,
  Text,
  Image,
  StyleSheet,
  Linking,
  Alert,
} from "react-native";
import { images } from "../data/images";
import { theme as t } from "../theme";
export function Picture({ id, style, label }) {
  return (
    <Image
      source={images[id]}
      resizeMode="contain"
      accessibilityLabel={label}
      accessible={!!label}
      style={[{ width: "100%", height: 220 }, style]}
    />
  );
}
export function Button({
  children,
  onPress,
  secondary = false,
  style,
  ...props
}) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        s.button,
        secondary && s.secondary,
        pressed && { opacity: 0.65 },
        style,
      ]}
      {...props}
    >
      <Text style={[s.buttonText, secondary && { color: t.blue }]}>
        {children}
      </Text>
    </Pressable>
  );
}
export async function openLink(url) {
  try {
    await Linking.openURL(url);
  } catch {
    Alert.alert(
      "Unable to open link",
      "Please check your connection and try again.",
    );
  }
}
export function ExternalLink({ href, children }) {
  return (
    <Button secondary onPress={() => openLink(href)}>
      {children} ›
    </Button>
  );
}
const s = StyleSheet.create({
  button: {
    backgroundColor: t.blue,
    borderRadius: 24,
    paddingHorizontal: 22,
    paddingVertical: 13,
    minHeight: 46,
    alignItems: "center",
    justifyContent: "center",
  },
  secondary: { backgroundColor: "transparent" },
  buttonText: { fontSize: 16, fontWeight: "600", color: "white" },
});

# Verification

Verified on Windows, 28 September 2026.

- Root npm installation and production Vite build succeeded.
- Website inspected at desktop 1440px, tablet 768px and phone 390px widths. No document horizontal overflow was observed at these widths.
- Checked responsive navigation, comparison layout, product configuration and scrollable dialogs.
- Configured iPhone 14, Yellow, 256GB: bag price $899. Reload persistence and item removal worked.
- Search no-results feedback and Escape dismissal worked.
- React Native exported Android, iOS and web bundles successfully using Expo.
- React Native Web preview: switched comparison models, selected iPhone SE Starlight 128GB and added it to the bag at $479.
- Automated catalogue checks cover all offered storage-price combinations and matching web/native product data.

## Limits and handoff checks

A physical Android/iOS device and iOS Simulator were not available. Run the mobile app on a device before submission, including keyboard behavior, safe areas, hardware back, accessibility and cold-start persistence. The browser preview and successful bundle exports do not establish native runtime parity.

The implementation uses original raster assets, system font fallbacks and equivalent navigation icons. Exact typography can vary by operating system. External service destinations may differ from the historical design. The guided-tour action links to Apple’s iPhone page because the supplied design contains a still image, not a video file. Purchase and subscription actions do not submit transactions.

Suggested review: run the website, resize the window, open each product picker, add/remove a product, refresh, search, use keyboard navigation, and inspect each section. Then repeat product selection and bag operations on the native app.

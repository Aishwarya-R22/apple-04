# Apple-04

React website and React Native application based on the Apple - 04 Figma page.

## Start the website

1. Extract the ZIP completely. Open the inner **Apple-04** folder in Visual Studio Code. It contains this README and `package.json`.
2. Install Node.js 22.12 or newer (Node.js 24 is suitable).
3. Choose **Terminal > New Terminal**, then run:

```sh
npm install
npm run dev
```

Open the local address printed in the terminal, normally http://127.0.0.1:5173. Keep the terminal running. Press Ctrl+C to stop.

If Windows PowerShell blocks `npm.ps1`, use `npm.cmd install` and `npm.cmd run dev`, or select Command Prompt as your VS Code terminal.

If you see `Missing script: dev`, you are using the earlier empty folder or the wrong directory. Open the new extracted folder containing the root package.json. You do not need to enter the web directory.

## Start the mobile application

In a second terminal at the same Apple-04 root:

```sh
npm run setup:mobile
npm run mobile
```

Use a compatible Expo Go application on your phone and scan the QR code. The phone and computer should be on the same network. The project uses Expo SDK 57. You can press **a** for a configured Android emulator or **w** for a browser preview. iOS Simulator requires macOS and Xcode. A browser preview runs React Native Web; it does not replace device testing.

If your Expo Go version does not support SDK 57, use a matching development environment rather than changing dependency versions individually.

## Other commands

```sh
npm test
npm run build
npm run preview
```

The website build is generated in `web/dist`. To export mobile bundles: `npm --prefix mobile run export`.

## Folder structure

```text
Apple-04/
  package.json          Root commands and web workspace
  package-lock.json     Reproducible website dependencies
  web/
    src/components/     Navigation, heroes, comparison, commerce, footer
    src/data/           Product catalogue, assets and legal copy
    src/styles/         Responsive styles and transitions
    public/images/      Original Figma image assets
  mobile/
    App.jsx             Native navigation and persistent bag state
    src/components/     Shared native controls and product sheet
    src/screens/        Explore, Compare and Bag
    src/data/           Product catalogue and static image imports
    assets/             Bundled images
    package-lock.json   Reproducible mobile dependencies
  tests/                Catalogue and pricing checks
  docs/                 Design reference and verification notes
```

## Functionality

The website includes responsive navigation, product search, product configuration, storage pricing, a persistent local bag, comparison, promotional sections, and footer navigation. The mobile app adapts the content into Explore, Compare and Bag screens with native controls and persistent storage. External information and service links open Apple’s website.

This is a frontend demonstration. There is no payment processing, account service or order submission. Product imagery and historical offer copy are preserved from the supplied design. Read docs/design-reference.md and docs/testing.md for scope and verification details.

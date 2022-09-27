# Appcues Ionic Example App

This is a simple Android and iOS app built with Ionic that integrates with Appcues Capacitor plugin.

## 🚀 Setup

```sh
cd ..
npm install
npm run build

cd ./example
npm install
```

## Running

### Browser

Appcues calls are printed with `console.log`.

```sh
ionic serve
```

### iOS

Page views are tracked and a button can display an Experience.

```
npm run build
npx cap sync

open ./ios/App/App.xcworkspace 
```

### Android

Page views are tracked and a button can display an Experience.

```
npm run build
npx cap sync
```

open the `android` project subdirectory in Android Studio.


This example app requires you to fill in an Appcues Account ID and an Appcues Application ID in `App.tsx`. You can enter your own values found in [Appcues Studio](https://studio.appcues.com), or use the following test values:
```
APPCUES_ACCOUNT_ID=103523
APPCUES_APPLICATION_ID=6f6a1ab2-bbf2-43ab-9a91-6325d12e6649
```

## ✨ Functionality

The example app demonstrates the core functionality of the Appcues Capacitor plugin across 4 screens.

### Sign In Screen

This screen is identified as `Sign In` for screen targeting.

Provide a User ID for use with `Appcues.identify()` or select an anonymous ID using `Appcues.anonymous()`.

### Events Screen

This screen is identified as `Trigger Events` for screen targeting.

Two buttons demonstrate `Appcues.track()` calls.

The navigation bar also includes a button to launch the in-app debugger with `Appcues.debug()`.

### Profile Screen

This screen is identified as `Update Profile` for screen targeting.

Textfields are included to update the profile attributes for the current user using `Appcues.identify()`.

The navigation bar also includes a button to sign out and navigate back to the Sign In Screen along with calling `Appcues.reset()`.

### Group Screen

This screen is identified as `Update Group` for screen targeting.

A textfield is included to set the group for the current user using `Appcues.group()`.

## Modifying

Whenever modifying the plugin or the test app, please make sure to run `npm run build` && `npx cap sync` to reflect changes.
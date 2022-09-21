# Appcues Capacitor Plugin Example App

A simple Ionic app example that uses the Appcues Capacitor plugin to bridge the native Appcues SDKs.

## Setup

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

## Modifying

If you're changing the plugin, you need to `npm run build` to sync plugin changes to the test app.

If you're changing the test app, you need to `npm run build` and `npx cap sync` to sync changes to the iOS and Android workspaces.
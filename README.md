# Appcues Capacitor Plugin

[![CircleCI](https://circleci.com/gh/appcues/appcues-capacitor-plugin/tree/main.svg?style=shield)](https://circleci.com/gh/appcues/appcues-capacitor-plugin/tree/main)
[![npm](https://img.shields.io/npm/v/@appcues/capacitor.svg?logo=npm&logoColor=fff&label=NPM+package&color=limegreen)](https://www.npmjs.com/package/@appcues/capacitor)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/appcues/appcues-capacitor-plugin/blob/main/LICENSE)

Appcues Capacitor Plugin allows you to integrate Appcues experiences into your Ionic apps for iOS and Android devices.

This capacitor is a bridge between the native Appcues SDKs in an Ionic application which sends user properties and events to the Appcues API and retrieves and renders Appcues content based on those properties and events.

- [Appcues Capacitor Plugin](#appcues-capacitor-plugin)
  - [🚀 Getting Started](#-getting-started)
    - [Installation](#installation)
    - [One Time Setup](#one-time-setup)
      - [Initializing the SDK](#initializing-the-sdk)
      - [Supporting Debugging and Experience Previewing](#supporting-debugging-and-experience-previewing)
    - [Identifying Users](#identifying-users)
    - [Tracking Screens and Events](#tracking-screens-and-events)
  - [📝 Documentation](#-documentation)
  - [🎬 Examples](#-examples)
  - [👷 Contributing](#-contributing)
  - [📄 License](#-license)

## 🚀 Getting Started

### Installation

In your app's root directory, run:
```sh
npm install @appcues/capacitor

npx cap sync
```

Note: You do not need to manually update your Podfile to add Appcues.

### One Time Setup

#### Initializing the SDK

An instance of the Appcues SDK should be initialized when your app launches.

```js
import { Appcues } from '@appcues/capacitor';

Appcues.initialize({accountId: 'APPCUES_ACCOUNT_ID', applicationId: 'APPCUES_APPLICATION_ID'})
```

Initializing the SDK requires you to provide two values, an Appcues account ID, and an Appcues mobile application ID. These values can be obtained from your [Appcues settings](https://studio.appcues.com/settings/account). Refer to the help documentation on [Registering your mobile app in Studio](https://docs.appcues.com/article/848-registering-your-mobile-app-in-studio) for more information.

#### Supporting Debugging and Experience Previewing

Supporting debugging and experience previewing is not required for the Appcues Capacitor Plugin to function, but it is necessary for the optimal Appcues builder experience. Refer to the [URL Scheme Configuration Guide](https://github.com/appcues/appcues-capacitor-plugin/blob/main/docs/URLSchemeConfiguring.md) for details on how to configure.

### Identifying Users

In order to target content to the right users at the right time, you need to identify users and send Appcues data about them. A user is identified with a unique ID.

```js
// Identify a user
Appcues.identify({userId: 'my-user-id'})
// Identify a user with property
Appcues.identify({ userId: 'my-user-id', properties: { company: "Appcues"}})
```

### Tracking Screens and Events

Events are the “actions” your users take in your application, which can be anything from clicking a certain button to viewing a specific screen. Once you’ve installed and initialized the Appcues Capacitor Plugin, you can start tracking screens and events using the following methods:

```js
// Track event
Appcues.track({name: "Sent Message"})
// Track event with property
Appcues.track({name: "Deleted Contact", properties: { id: 123 }})

// Track screen
Appcues.screen({title: "Contact List"})   
// Track screen with property
Appcues.screen({title: "Contact List", properties: { reference: "abc" }})
```

## 📝 Documentation

More technical documentation about this capacitor is available in the [docs](https://github.com/appcues/appcues-capacitor-plugin/tree/main/docs). Auto-generated documentation is available [here](http://github.com/appcues/appcues-capacitor-plugin/tree/main/docs/ApiDefinition.md).

> Full documentation is available at https://docs.appcues.com/

## 🎬 Examples

The `example` directory in this repository contains full example iOS/Android app to providing references for correct installation and usage of the Appcues API.

## 👷 Contributing

See the [contributing guide](https://github.com/appcues/appcues-capacitor-plugin/blob/main/CONTRIBUTING.md) to learn how to get set up for development and how to contribute to the project.

## 📄 License

This project is licensed under the MIT License. See [LICENSE](https://github.com/appcues/appcues-capacitor-plugin/blob/main/LICENSE) for more information.

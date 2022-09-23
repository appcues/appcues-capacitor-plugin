# Configuring the Appcues URL Scheme

The Appcues Capacitor Plugin includes support for a custom URL scheme that supports previewing Appcues experiences in-app prior to publishing and launching the Appcues debugger.

## Prerequisites

Your app must be configured to support [Linking](https://capacitorjs.com/docs/guides/deep-links) for both Android and IOS.

## Register the Custom URL Scheme

Add the Appcues scheme to your project configuration. Replace `APPCUES_APPLICATION_ID` in the snippet below with your app's Appcues Application ID.

For example, if your Appcues Application ID is `123-xyz` your url scheme value would be `appcues-123-xyz`.

```sh
npx uri-scheme add appcues-APPCUES_APPLICATION_ID --ios
npx uri-scheme add appcues-APPCUES_APPLICATION_ID --android
```

## Handle the Custom URL Scheme

URL's need to be handled with an event listener (React example):

```js
import React, { useEffect } from 'react';
import { App, URLOpenListenerEvent } from '@capacitor/app';
import { Appcues } from '@appcues/capacitor';

const AppUrlListener: React.FC<any> = () => {
    useEffect(() => {
      App.addListener('appUrlOpen', (event: URLOpenListenerEvent) => {
        const appcuesDidHandleURL = Appcues.didHandleURL({url: event.url});
        if (!appcuesDidHandleURL) {
          // Handle a non-Appcues URL
        }
      });
    }, []);
  
    return null;
  };
  
export default AppUrlListener;
```

> Don't forget to include the AppUrlListener to your React Ionic App

```js
<IonApp>
      <IonReactRouter>    
        <AppUrlListener/>   
        .
        .
        .
      </IonReactRouter>
  </IonApp>
```

For more information see Ionic documentation on [deeplinks](https://ionicframework.com/docs/native/deeplinks)

## Verifying the Custom URL Scheme

The Appcues debugger allows you to easily validate that the Appcues deeplink is properly configured.

1. Launch the debugger in your app with a call to ``Appcues/debug()``.
2. Expand the debugger by tapping the floating button.
3. Tap the "Appcues Deeplink Configured" row to verify the status. If a checkmark appears, the Appcues deeplink is properly configured.

### Troubleshooting

- `Error 1`: AndroidManifest intent-filter scheme missing
- `Error 2`: Appcues SDK not receiving links
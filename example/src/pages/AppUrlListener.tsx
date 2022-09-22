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
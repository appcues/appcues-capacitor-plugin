import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';

/* Theme variables */
import './theme/variables.css';

import { Appcues, AppcuesConfig } from '@appcues/capacitor';
import SignInPage from './pages/signin/SignInPage';
import HomePage from './pages/home/HomePage';

export default function App() {
  // Ensures that first _real_ render of the app doesn't occur until
  // SDK init complete - to avoid screen view analytics before SDK is ready
  const [initComplete, setInitComplete] = useState(false);

  useEffect(() => {
    const initAppcues = async () => {
      let appcuesConfig =  new AppcuesConfig();
      appcuesConfig.logging = true;

      await Appcues.initialize({accountId: 'APPCUES_ACCOUNT_ID', applicationId: 'APPCUES_APPLICATION_ID', config: appcuesConfig});

      setInitComplete(true);
    }
    
    initAppcues();

  }, []);

  return (
  <IonApp>
      <IonReactRouter>
        {
          initComplete && <IonRouterOutlet id="main">
            <Route path="/signIn" component={SignInPage} />
            <Route path="/home" component={HomePage} />
            <Redirect exact from="/" to="/signIn" />
          </IonRouterOutlet>
        }
      </IonReactRouter>
  </IonApp>
  );
}
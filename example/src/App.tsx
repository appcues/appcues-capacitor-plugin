import { useEffect, useState } from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import eventsIcon from './assets/ic_events.svg' 
import profileIcon from './assets/ic_profile.svg'
import groupIcon from './assets/ic_group.svg'
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import { Appcues } from 'appcues-capacitor';

function Tabs() {
  const location = useLocation();

  useEffect(() => {
    Appcues.screen({title: location.pathname.substring(1)})
  }, [location]);

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/tab1">
          <Tab1 />
        </Route>
        <Route exact path="/tab2">
          <Tab2 />
        </Route>
        <Route path="/tab3">
          <Tab3 />
        </Route>
        <Route exact path="/">
          <Redirect to="/tab1" />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="Events" href="/tab1">
          <IonIcon icon={eventsIcon} />
          <IonLabel>Events</IonLabel>
        </IonTabButton>
        <IonTabButton tab="Profile" href="/tab2">
          <IonIcon icon={profileIcon} />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
        <IonTabButton tab="Group" href="/tab3">
          <IonIcon icon={groupIcon} />
          <IonLabel>Group</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  )
}

export default function App() {
  // Ensures that first _real_ render of the app doesn't occur until
  // SDK init complete - to avoid screen view analytics before SDK is ready
  const [initComplete, setInitComplete] = useState(false);

  useEffect(() => {
    const initAppcues = async () => {
      await Appcues.initialize({accountID: 'APPCUES_ACCOUNT_ID', applicationID: 'APPCUES_APPLICATION_ID', 'logging': true});
      await Appcues.identify({userID: 'ionic-user-00000'});
      setInitComplete(true);
    }
    
    initAppcues();

  }, []);

  return (
  <IonApp>
    <IonReactRouter>
      {initComplete && <Tabs />}
    </IonReactRouter>
  </IonApp>
  );
}
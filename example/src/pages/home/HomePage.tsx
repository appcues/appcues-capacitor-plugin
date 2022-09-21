import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonPage } from '@ionic/react';
import { Redirect, Route, useLocation } from 'react-router';
import HomeEventsTab from './events/HomeEventsTab';
import HomeGroupTab from './group/HomeGroupTab';
import HomeProfileTab from './profile/HomeProfileTab';
import eventsIcon from '../../assets/ic_events.svg' 
import profileIcon from '../../assets/ic_profile.svg'
import groupIcon from '../../assets/ic_group.svg'
import './HomePage.css';
import { Appcues } from '@appcues/capacitor';
import { useEffect } from 'react';

const path = "/home"
const eventsTabPath = "/events";
const profileTabPath = "/profile";
const groupTabPath = "/group";

const HomePage: React.FC = () => {
  const location = useLocation();
  const [, tabPath] = location.pathname.split(path)

  useEffect(() => { 
    switch(tabPath) {
      case eventsTabPath: {
        Appcues.screen({title: "Trigger Events"})    
        break;
      }
      case profileTabPath: {
        Appcues.screen({title: "Update Profile"})
        break;
      }
      case groupTabPath: {
        Appcues.screen({title: "Update Group"})
        break;
      }
      default: break;
    }
    }, [tabPath]);

  return (
    <IonPage>  
      <IonTabs>
        <IonRouterOutlet>
          <Route path={path + eventsTabPath} component={HomeEventsTab} />
          <Route path={path + profileTabPath} component={HomeProfileTab} />
          <Route path={path + groupTabPath} component={HomeGroupTab} />
          <Redirect exact from={path} to={path + eventsTabPath} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="Events" href={path + eventsTabPath}>
            <IonIcon icon={eventsIcon} />
            <IonLabel>Events</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Profile" href={path + profileTabPath}>
            <IonIcon icon={profileIcon} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Group" href={path + groupTabPath}>
            <IonIcon icon={groupIcon} />
            <IonLabel>Group</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonPage>
  );
};

export default HomePage;

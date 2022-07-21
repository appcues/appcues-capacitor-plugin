import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { Appcues } from 'appcues-capacitor';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Appcues Ionic</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Appcues Ionic</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton expand="block" onClick={() => Appcues.track({name: "event1"})} >Trigger Event 1</IonButton>
        <IonButton expand="block" onClick={() => Appcues.track({name: "event2"})} >Trigger Event 2</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

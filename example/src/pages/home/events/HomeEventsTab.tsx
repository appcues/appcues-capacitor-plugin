import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons } from '@ionic/react';
import './HomeEventsTab.css';
import { Appcues } from '@appcues/capacitor';

const HomeEventsTab: React.FC = () => {
  const openDebugger = () => {
    Appcues.debug()
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="end">
           <IonButton onClick={openDebugger}>DEBUG</IonButton>
        </IonButtons>
          <IonTitle>Trigger Events</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Trigger Events</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton expand="block" onClick={() => Appcues.track({name: "event1"})} >Trigger Event 1</IonButton>
        <IonButton expand="block" onClick={() => Appcues.track({name: "event2"})} >Trigger Event 2</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default HomeEventsTab;

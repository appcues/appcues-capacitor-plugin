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
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Appcues Ionic</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="container">
          <IonButton onClick={() => Appcues.show({experienceID: "83adabe5-b650-4734-8e95-0870dc49fd35"})} >Show Experience</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

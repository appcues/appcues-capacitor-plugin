import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Appcues } from 'appcues-capacitor';
import './HomeGroupTab.css';

const HomeGroupTab: React.FC = () => {
  let group = ""

  const onSaveGroup = () => {
    Appcues.group({ groupId: group })
  }

  return (
<IonPage>
      <IonHeader>
      <IonToolbar>
          <IonTitle>Update Group</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding" fullscreen>
        <IonList>
          <IonItem>
            <IonLabel position="floating">Group</IonLabel>
            <IonInput type="text" onIonChange={(value) => group = value.detail.value!}></IonInput>
          </IonItem>
        </IonList>

        <IonButton onClick={onSaveGroup} color='primary' expand='block'>SAVE</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default HomeGroupTab;

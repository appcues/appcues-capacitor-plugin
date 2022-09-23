import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Appcues } from '@appcues/capacitor';
import { useHistory } from 'react-router';
import { GlobalVars } from '../../signin/SignInPage';
import './HomeProfileTab.css';

interface ProfileUpdate {
  givenName?: string;
  familyName?: string;
}

const HomeProfileTab: React.FC = () => {
  let givenName = ""
  let familyName = ""

  const history = useHistory();

  const onSignOut = () => {
    Appcues.reset()
    GlobalVars.userId = ""
    history.push("/signIn")
  }

  const onSave = () => {
    let update: ProfileUpdate = { }

    if(givenName.length !== 0) {
      update.givenName = givenName
    }

    if(familyName.length !== 0) {
      update.familyName = familyName
    }

    Appcues.identify({userId: GlobalVars.userId, properties: update})
  }

  return (
    <IonPage>
          <IonHeader>
          <IonToolbar>
            <IonButtons slot="end">
              <IonButton onClick={onSignOut} >SIGN OUT</IonButton>
            </IonButtons>
              <IonTitle>Update Profile</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent className="ion-padding" fullscreen>
            <IonList>
              <IonItem>
                <IonLabel position="floating">Given Name</IonLabel>
                <IonInput type="text" onIonChange={(value) => givenName = value.detail.value!} />
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Family Name</IonLabel>
                <IonInput type="text" onIonChange={(value) => familyName = value.detail.value!} />
              </IonItem>
            </IonList>

            <IonButton onClick={onSave} color='primary' expand='block'>SAVE</IonButton>
          </IonContent>
        </IonPage>
  );
};

export default HomeProfileTab;

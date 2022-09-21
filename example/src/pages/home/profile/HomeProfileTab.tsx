import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Appcues } from '@appcues/capacitor';
import { useHistory } from 'react-router';
import { GlobalVars } from '../../signin/SignInPage';
import './HomeProfileTab.css';

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
    let properties = JSON.parse("{}");
    if(givenName.length != 0) {
      properties["given_name"] = givenName
    }

    if(familyName.length != 0) {
      properties["family_name"] = familyName
    }

    Appcues.identify({userId: GlobalVars.userId, properties: properties})
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

import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Appcues } from '@appcues/capacitor';
import { useNavigate } from 'react-router-dom';
import { GlobalVars } from '../../signin/SignInPage';
import './HomeProfileTab.css';

interface ProfileUpdate {
  givenName?: string;
  familyName?: string;
}

const HomeProfileTab: React.FC = () => {
  let givenName = ""
  let familyName = ""

  const navigate = useNavigate();

  const onSignOut = () => {
    Appcues.reset()
    GlobalVars.userId = ""
    navigate("/signIn")
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
                <IonInput label="Given Name" labelPlacement="floating" type="text" onIonInput={(event) => givenName = event.detail.value ?? ""} />
              </IonItem>

              <IonItem>
                <IonInput label="Family Name" labelPlacement="floating" type="text" onIonInput={(event) => familyName = event.detail.value ?? ""} />
              </IonItem>
            </IonList>

            <IonButton onClick={onSave} color='primary' expand='block' data-appcues-id="btnSaveProfile">SAVE</IonButton>
          </IonContent>
        </IonPage>
  );
};

export default HomeProfileTab;

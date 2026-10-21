import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonInput, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Appcues, VersionResponse } from '@appcues/capacitor';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './SignInPage.css';

export class GlobalVars {
  public static userId: string = "default-0000";
}

const SignInPage: React.FC = () => {
  const [ version, setVersion ] = useState<string>('');

  useEffect(() => { Appcues.version().then((response: VersionResponse) => { 
    setVersion(response.version)
  })}, []);

  const navigate = useNavigate();

  
  const onSignIn = () => {
    Appcues.identify({userId: GlobalVars.userId})
    navigateHome()
  };
  
  const onAnonymous = () => {
    Appcues.anonymous();

    navigateHome()
  };
  
  const onSkip = () => {
    navigateHome()
  };
  
  const navigateHome = () => {
    navigate("/home")
  }

  return (
    <IonPage>
      <IonHeader>
      <IonToolbar>
        <IonButtons slot='end'>
           <IonButton onClick={onSkip}>SKIP</IonButton>
        </IonButtons>
          <IonTitle>Sign in</IonTitle>
          
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding" fullscreen>
        <IonList>
          <IonItem>
            <IonInput label="User ID" labelPlacement="floating" type="text" value={GlobalVars.userId} onIonInput={(event) => GlobalVars.userId = event.detail.value ?? ""}></IonInput>
          </IonItem>
        </IonList>

        <IonButton onClick={onSignIn} color='primary' expand='block'>Sign In</IonButton>
      </IonContent>

      <IonFooter className='ion-no-border ion-text-center ion-padding-vertical'>
        { version.length !== 0 && <p>Version: {version}</p> }
        <IonButton onClick={onAnonymous} color='tertiary'>ANONYMOUS USER</IonButton>
      </IonFooter>

    </IonPage>
  );
};

export default SignInPage;

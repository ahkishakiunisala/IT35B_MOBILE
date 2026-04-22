import {
  IonButton,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonRouterOutlet,
  IonTitle,
} from "@ionic/react";

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonRouterOutlet>
          <IonButton slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButton>
          <IonTitle>Login</IonTitle>
        </IonRouterOutlet>
      </IonHeader>
      <IonContent fullscreen>
        <h1>Login</h1>
      </IonContent>
    </IonPage>
  );
};
export default Login;
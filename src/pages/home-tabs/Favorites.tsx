import {
  IonButton,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonRouterOutlet,
  IonTitle,
} from "@ionic/react";

const Favorites: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonRouterOutlet>
          <IonButton slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButton>
          <IonTitle>Favorites</IonTitle>
        </IonRouterOutlet>
      </IonHeader>
      <IonContent fullscreen>
        <h1>Favorites</h1>
      </IonContent>
    </IonPage>
  );
};
export default Favorites;
import {
  IonButton,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonRouterOutlet,
  IonTitle,
} from "@ionic/react";

const Feed: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonRouterOutlet>
          <IonButton slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButton>
          <IonTitle>Feed</IonTitle>
        </IonRouterOutlet>
      </IonHeader>
      <IonContent fullscreen>
        <h1>Feed</h1>
      </IonContent>
    </IonPage>
  );
};
export default Feed;
import {
  IonButton,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonRouterOutlet,
  IonTitle,
} from "@ionic/react";

const Search: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonRouterOutlet>
          <IonButton slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButton>
          <IonTitle>Search</IonTitle>
        </IonRouterOutlet>
      </IonHeader>
      <IonContent fullscreen>
        <h1>Search</h1>
      </IonContent>
    </IonPage>
  );
};
export default Search;
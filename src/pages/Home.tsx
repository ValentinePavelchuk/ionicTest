import {IonPage, IonButton, IonContent, IonGrid, IonRow} from '@ionic/react';

const Home: React.FC = () => {

    return (
        <IonPage>
            <IonContent>
                <IonButton className="myButton" size="large" color="primary" routerLink="/gallery">Fetch</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Home;


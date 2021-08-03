import {
    IonContent,
    IonRow,
    IonPage,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle, IonHeader
} from '@ionic/react';
import {useEffect, useState} from "react";
import GalleryItem from "../../components/GalleryItem/GalleryItem";
import {CATS_URL} from "../../constants";

import './Gallery.css';

const Gallery: React.FC = () => {
    const [urls, setUrls] = useState([]);

    async function getData() {
        let data = await fetch(CATS_URL)
            .then(response => response.json())
        setUrls(data);
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/"/>
                    </IonButtons>
                    <IonTitle>Our lovely cats</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonRow>
                    {urls.length > 0 && urls.map((item: any) => {
                        return <GalleryItem url={item.url} id={item.id}/>
                    })}
                </IonRow>
            </IonContent>
        </IonPage>
    );
};

export default Gallery;


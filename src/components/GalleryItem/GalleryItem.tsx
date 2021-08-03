import './GalleryItem.scss';
import React from 'react';
import { IonList, IonItem, IonThumbnail, IonImg, IonCol } from '@ionic/react';

interface IGalleryProps {
    url: string;
    id: string;
}

const GalleryItem: React.FC<IGalleryProps> = ({ url, id }) => {
    return (
        <IonCol size="12">
            <div className="gallery">
                <img className="gallery__item" src={url} alt=""/>
            </div>
        </IonCol>
    );
};

export default GalleryItem;

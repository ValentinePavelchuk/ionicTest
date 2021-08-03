import {Redirect, Route} from 'react-router-dom';
import {
    IonApp,
    IonRouterOutlet,
} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import Home from "./pages/Home";
import Gallery from "./pages/Gallery/Gallery";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Theme variables */
import './theme/variables.css';

import './styles/button.scss'


const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonRouterOutlet>
                <Route exact path="/gallery">
                    <Gallery/>
                </Route>
                <Route exact path="/">
                    <Home/>
                </Route>
            </IonRouterOutlet>
        </IonReactRouter>
    </IonApp>
);

export default App;

import React from "react";

import s from './mapPage.module.scss';
import {Map} from "features/map";

export const MapPage: React.FC = () => {
    return(
        <div className={s.main__container}>
            <h1>Карта заявок</h1>
            <Map/>
        </div>
    );
}
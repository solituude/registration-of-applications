import React from "react";

import s from './mapPage.module.scss';
import Map from "pages/mapPage/ui/Map";

export const MapPage: React.FC = () => {
    return(
        <div className={s.main__container}>
            <h1>Карта заявок</h1>
            <Map/>
        </div>
    );
}
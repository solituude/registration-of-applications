import React, {useEffect} from "react";
import {Feature} from "ol";
import {Tile, Vector as LayerVector} from "ol/layer";
import OSM from "ol/source/OSM";
import Map from 'ol/Map.js';
import View from "ol/View";
import {fromLonLat, toLonLat} from "ol/proj";
import {Vector as SourceVector} from "ol/source";
import {Point} from "ol/geom";
import {Icon, Style} from "ol/style";

import {useUnit} from "effector-react";
import {$allApplications, getAllApplicationsFx} from "entities/application/model/allApplicationsModel";
import redIcon from "shared/lib/icons/redPoint.svg";
import orangeIcon from "shared/lib/icons/orangePoint.svg";
import greenIcon from "shared/lib/icons/greenPoint.svg";
import blueIcon from "shared/lib/icons/bluePoint.svg";
import {useNavigate} from "react-router-dom";
import {getMapParams} from "features/map";

const getIcon = (priority: string) => {
    switch (priority){
        case "1":
            return redIcon;
        case "2":
            return orangeIcon;
        case "3":
            return greenIcon;
        case "4":
            return blueIcon;
        default:
            return redIcon;
    }
}


export const MapV: React.FC = () => {
    const app = useUnit($allApplications);
    const navigate = useNavigate();


    useEffect(() => {
        getAllApplicationsFx().then(r => console.log(r));

    }, []);

    useEffect(() => {
        const mapContainer = document.getElementById('map');
        const mapParams = getMapParams(window.location.href);
        navigate(`/map/${mapParams.x}/${mapParams.y}/${mapParams.zoom}`);

        if (mapContainer && mapContainer.lastChild) {
            mapContainer.removeChild(mapContainer.lastChild);
        }
        const map = new Map({
            target: 'map',
            layers: [
                new Tile({
                    source: new OSM()
                })
            ],
            view: new View({
                center: fromLonLat([Number(mapParams.x), Number(mapParams.y)]),
                zoom: Number(mapParams.zoom)
            })
        });

        const arrMarkers: Feature[] = [];

        for (let i = 0; i < app.length; i++) {
            const currentMarker = new Feature({
                geometry: new Point(fromLonLat([app[i].coordinates[1],
                    app[i].coordinates[0]]))
            });
            currentMarker.setStyle(
                new Style({
                    image: new Icon({
                        src: getIcon(app[i].priority),
                    }),
                })
            );
            arrMarkers.push(currentMarker);
        }

        const vectorSource = new SourceVector({
            features: arrMarkers
        });
        const vectorLayer = new LayerVector({
            source: vectorSource
        });
        map.addLayer(vectorLayer);

        map.getView().on('change:center', () => updateUrl());
        map.getView().on('change:resolution', () => updateUrl());

        const updateUrl = () => {
            const view = map.getView();
            const center = toLonLat(view.getCenter() as any);
            const zoom = view.getZoom();
            const [x, y] = center;
            navigate(`/map/${x}/${y}/${zoom}`);
        };

    }, [app]);
    return(
        <div id="map" style={{width: "100%", height: "100%"}}/>
    )
}
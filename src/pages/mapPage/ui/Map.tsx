import React, {useEffect} from "react";
import {Feature} from "ol";
import {Tile, Vector as LayerVector} from "ol/layer";
import OSM from "ol/source/OSM";
import Map from 'ol/Map.js';
import View from "ol/View";
import {fromLonLat} from "ol/proj";
import {Vector as SourceVector} from "ol/source";
import {Point} from "ol/geom";
import {Icon, Style} from "ol/style";

import {useUnit} from "effector-react";
import {$allApplications, getAllApplicationsFx} from "entities/application/model/allApplicationsModel";
import redIcon from "shared/lib/icons/redPoint.svg";
import orangeIcon from "shared/lib/icons/orangePoint.svg";
import greenIcon from "shared/lib/icons/greenPoint.svg";
import blueIcon from "shared/lib/icons/bluePoint.svg";

const MapV: React.FC = () => {
    const app = useUnit($allApplications);
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
    useEffect(() => {
        getAllApplicationsFx().then(r => console.log(r));
    }, [])
    useEffect(() => {
        const mapContainer = document.getElementById('map');

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
                center: fromLonLat([39.718808, 47.22211]),
                zoom: 12
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

    }, [app]);
    return(
        <div id="map" style={{width: "100%", height: "100%"}}/>
    )
}

export default MapV;
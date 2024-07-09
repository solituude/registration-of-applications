import React, {useEffect} from "react";
import "ol/ol.css";
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import OSM from 'ol/source/OSM.js';
import {fromLonLat, toLonLat} from "ol/proj";

import {Feature} from 'ol';
import {Point} from "ol/geom";
import {Icon, Style} from "ol/style";
import greenIcon from 'shared/lib/icons/greenPoint.svg';
import blueIcon from 'shared/lib/icons/bluePoint.svg';
import orangeIcon from 'shared/lib/icons/orangePoint.svg';
import redIcon from 'shared/lib/icons/redPoint.svg';
import {Tile} from "ol/layer";
import {Vector as SourceVector} from 'ol/source';
import {Vector as LayerVector} from "ol/layer";
import {$currApplication, handleUpdateCurrApplication} from "entities/application";
import {useUnit} from "effector-react";



export const MapView: React.FC = () => {
    const app = useUnit($currApplication);

    const getIcon = () => {
        switch (app.priority){
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
        const mapContainer = document.getElementById('map');
        let currentMarker: Feature;
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
                center: fromLonLat([app.coordinates[1], app.coordinates[0]]),
                zoom: 18
            })
        });

        const vectorSource = new SourceVector();
        const vectorLayer = new LayerVector({
            source: vectorSource
        });
        map.addLayer(vectorLayer);
        currentMarker = new Feature({
            geometry: new Point(fromLonLat([app.coordinates[1], app.coordinates[0]]))
        });
        currentMarker.setStyle(
            new Style({
                image: new Icon({
                    src: getIcon(),
                }),
            })
        );

        vectorSource.addFeature(currentMarker);

        map.on('click', function(event) {
            const coordinates = event.coordinate;
            const lonLat = toLonLat(coordinates);
            handleUpdateCurrApplication({...app, coordinates: [lonLat[1], lonLat[0]]});
            console.log('Координаты:', lonLat);

            if (currentMarker) {
                vectorSource.removeFeature(currentMarker);
            }

            currentMarker = new Feature({
                geometry: new Point(coordinates)
            });
            currentMarker.setStyle(
                new Style({
                    image: new Icon({
                        src: getIcon(),
                    }),
                })
            );

            vectorSource.addFeature(currentMarker);
        });
    }, [app.coordinates[0], app.coordinates[1], app.priority]);

    return <div id="map" style={{width: "100%", height: "200px"}}/>;
}
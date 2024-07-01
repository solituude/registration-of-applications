import React, { useEffect } from "react";
import "ol/ol.css";
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';
import {Vector} from "ol/source";
import VectorLayer from "ol/layer/Vector";
import {toLonLat, transform} from "ol/proj";
import {MapViewProps} from "../../lib/types";
import {Feature} from 'ol';
import {Point} from "ol/geom";


const MapView: React.FC<MapViewProps> = ({lat, lon}) => {
    useEffect(() => {
        var olCoordinates = transform([lat, lon].reverse(), 'EPSG:4326', 'EPSG:3857');
        const map = new Map({
            target: "map",
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: toLonLat([0, 0]),
                zoom: 12,
            }),
        });
        map.getView().setCenter(olCoordinates);

        const vectorSource = new Vector();
        const vectorLayer = new VectorLayer({
            source: vectorSource
        });
        map.addLayer(vectorLayer);

        let currentMarker: Feature;

        map.on('click', function(event) {
            const coordinates = event.coordinate;
            const lonLat = toLonLat(coordinates);
            console.log('Координаты:', lonLat);

            if (currentMarker) {
                vectorSource.removeFeature(currentMarker);
            }

            currentMarker = new Feature({
                geometry: new Point(coordinates)
            });
            vectorSource.addFeature(currentMarker);
        });
        return () => {
            map.setTarget();
        };
    }, []);
    return <div id="map" style={{width: "100%", height: "400px"}}/>;
}

export default MapView;
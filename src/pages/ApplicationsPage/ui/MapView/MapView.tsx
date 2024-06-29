import React, { useEffect } from "react";
import "ol/ol.css";
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';
import {toLonLat, transform} from "ol/proj";


function MapView() {
    useEffect(() => {


        var lon = 39.70634969; // replace with your desired longitude
        var lat = 47.23629300; // replace with your desired latitude

        var olCoordinates = transform([47.21704162665687, 39.715377787613086].reverse(), 'EPSG:4326', 'EPSG:3857');
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

        return () => {
            map.setTarget();
        };
    }, []);
    return <div id="map" style={{width: "100%", height: "400px"}}/>;
}

export default MapView;
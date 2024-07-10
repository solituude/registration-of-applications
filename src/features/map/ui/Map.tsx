import React, {useEffect, useRef, useState} from "react";
import {useUnit} from "effector-react";
import {Feature, Overlay} from "ol";
import {Tile, Vector as LayerVector} from "ol/layer";
import OSM from "ol/source/OSM";
import Map from 'ol/Map.js';
import View from "ol/View";
import {fromLonLat, toLonLat} from "ol/proj";
import {Vector as SourceVector} from "ol/source";
import {Point} from "ol/geom";
import {Icon, Style} from "ol/style";
import {useNavigate} from "react-router-dom";
import {getMapParams, phoneIcon} from "features/map";
import {mapNavbarIcon, getIcon, ApplicationType} from 'shared/lib';
import {AccidentChip, PriorityChip} from "shared/ui";
import {$allApplications, getAllApplicationsFx} from "entities/application";
import s from './map.module.scss';

export const MapV: React.FC = () => {
    const app = useUnit($allApplications);
    const navigate = useNavigate();
    const [popupContent, setPopupContent] = useState<ApplicationType | null>(null);
    const popupRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const mapContainer = document.getElementById('map');
        const mapParams = getMapParams(window.location.href);
        navigate(`/map/${mapParams.x}/${mapParams.y}/${mapParams.zoom}`);

        while (mapContainer && mapContainer.lastChild) {
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
                    app[i].coordinates[0]])),
                data: app[i]
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

        const popup = new Overlay({
            element: popupRef.current || undefined,
        });
        map.addOverlay(popup);


        map.on('click', (evt) => {
            const feature = map.forEachFeatureAtPixel(evt.pixel, (feat) => feat as Feature);
            console.log(document.getElementById('popup'))
            if (feature) {
                // console.log(popup.getElement())
                const coordinates = evt.coordinate;
                const data = feature.get('data') as ApplicationType;
                // console.log(data);
                setPopupContent(data);
                popup.setPosition(coordinates);
            } else {
                popup.setPosition(undefined);
            }
        });

        map.on('pointermove', (e) => {
            const pixel = map.getEventPixel(e.originalEvent);
            const hit = map.hasFeatureAtPixel(pixel);
            map.getTargetElement().style.cursor = hit ? 'pointer' : '';
        });

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


    useEffect(() => {
        getAllApplicationsFx().then(r => console.log(r));
    }, []);

    return (
        <>
            <div id="map" style={{width: "100%", height: "100%"}}/>
            <div ref={popupRef} id="popup" className={s.popup__container}>
                {popupContent && (
                    <>
                        <h2 className={s.popup__header}>Заявка №{popupContent.id}</h2>
                        <div className={s.chip__container}>
                            <PriorityChip priority={popupContent.priority}/>
                            <AccidentChip accident={popupContent.accidentType}/>
                        </div>


                        <div className={s.popup__item}>
                            <img src={mapNavbarIcon} className={s.popup__icon} alt={"map"}/>
                            <span>{popupContent.address}</span>
                        </div>


                        <div className={s.popup__item}>
                            <img src={phoneIcon} alt={"phone"} className={s.popup__icon}/>
                            <span>{popupContent.phone}</span>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

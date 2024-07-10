import {MapParamsType} from "features/map/lib/types";

export const getMapParams = (link: string): MapParamsType => {
    const params: MapParamsType = {x: "0", y: "0", zoom: "12"};
    const arrItems = link.split('/');

    params.x = arrItems[4] === '%3Cx%3E' ? "39.718808" : arrItems[4];
    params.y = arrItems[5] === "%3Cy%3E" ? "47.22211" : arrItems[5];
    params.zoom = arrItems[6] === "%3Czoom%3E" ? "12": arrItems[6];
    return params;
}

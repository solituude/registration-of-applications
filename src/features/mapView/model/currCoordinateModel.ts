import {createEvent, createStore} from "effector";

export const $currCoordinateModel = createStore<[number, number]>([0, 0]);

export const handleUpdateCoordinate = createEvent<[number, number]>();

const updateCoordinate = (_: [number, number], data: [number, number]): [number, number] => {
    return [data[0], data[1]];
}

$currCoordinateModel
    .on(handleUpdateCoordinate, updateCoordinate);
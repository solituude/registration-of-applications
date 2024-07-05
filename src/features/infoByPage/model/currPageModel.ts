// текущая страница в таблице заявок
import {createEvent, createStore} from "effector";

export const $currPage = createStore<number>(1);

export const handleUpdatePage = createEvent<number>();

const updatePage = (_: number, data: number) => {
    return data;
}

$currPage
    .on(handleUpdatePage, updatePage);



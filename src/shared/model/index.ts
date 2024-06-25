// общее хранилище для всех заявок (используются и в карте и в журнале)

import {createEffect, createStore, restore, combine, createEvent} from "effector";
import {ApplicationType} from "../types/types";

// хранилище всех заявок
export const $allApplications = createStore<ApplicationType[]>([]);

// эффект для получения всех заявок
export const getAllApplicationsFx = createEffect<void, ApplicationType[], Error>();

//хранилище ошибки получения заявок
export const $fetchError = restore<Error>(getAllApplicationsFx.failData, null);

// статус запроса
export const $applicationsGetStatus = combine({
    loading: getAllApplicationsFx.pending,
    error: $fetchError,
    data: $allApplications
});


export const $currPage = createStore<number>(1);

export const handleUpdatePage = createEvent<number>();

const updatePage = (_: number, data: number) => {
    return data;
}

$currPage
    .on(handleUpdatePage, updatePage);
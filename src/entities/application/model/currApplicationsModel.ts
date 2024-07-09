import { combine, createEffect, createStore, restore } from 'effector';
import {getApplicationsByPage, ResponseCurrApplicationsType} from "entities/application";
import {searchApplicationByName} from "entities/application/api/api";
import {RequestSearchType} from "entities/application/model/types";

// Создаем хранилище для текущих заявок
export const $currApplications = createStore<ResponseCurrApplicationsType>({
    data:[], first: 0, items: 0, last: 0, next: 0, pages: 0, prev: 0
});

// Создаем эффект для получения текущих заявок
export const getCurrApplicationsFx = createEffect<number, ResponseCurrApplicationsType, Error>();
getCurrApplicationsFx.use(getApplicationsByPage);

export const getSearchApplicationFx = createEffect<RequestSearchType, ResponseCurrApplicationsType, Error>();
getSearchApplicationFx.use(searchApplicationByName);


// Хранилище ошибки получения заявок
export const $fetchCurrApplicationError = restore<Error>(getCurrApplicationsFx.failData, null).reset(getCurrApplicationsFx);


// Статус запроса
export const $currApplicationsGetStatus = combine({
    loading: getCurrApplicationsFx.pending || getSearchApplicationFx.pending,
    error: $fetchCurrApplicationError,
    data: $currApplications,
});

// Обновление хранилища заявок при успешном выполнении эффекта
$currApplications
    .on(getCurrApplicationsFx.doneData, (_, data) => data);
$currApplications
    .on(getSearchApplicationFx.doneData, (_, data) => data);


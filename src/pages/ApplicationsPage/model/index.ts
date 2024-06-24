import { combine, createEffect, createStore, restore } from 'effector';
import {getApplicationsByPage} from "../../../shared/api";
import {IResponseCurrApplications} from "../lib/types";

// Создаем хранилище для текущих заявок
export const $currApplications = createStore<IResponseCurrApplications>({
    data:[], first: 0, items: 0, last: 0, next: 0, pages: 0, prev: 0
});

// Создаем эффект для получения текущих заявок
export const getCurrApplicationsFx = createEffect<number, IResponseCurrApplications, Error>();
getCurrApplicationsFx.use(getApplicationsByPage);

// Хранилище ошибки получения заявок
export const $fetchCurrApplicationError = restore<Error>(getCurrApplicationsFx.failData, null).reset(getCurrApplicationsFx);

// Статус запроса
export const $currApplicationsGetStatus = combine({
    loading: getCurrApplicationsFx.pending,
    error: $fetchCurrApplicationError,
    data: $currApplications,
});

// Обновление хранилища заявок при успешном выполнении эффекта
$currApplications.on(getCurrApplicationsFx.doneData, (_, data) => data);

// последний адишник заявки
import {combine, createEffect, createStore, restore} from "effector";
import {getLastId} from "pages/addPage";


// хранилище последнего айди
export const $lastId = createStore<number>(9999);

// эффект получения последнего айди
export const getLastIdFx = createEffect<void, { data: number }, Error>();
getLastIdFx.use(getLastId);


// Ошибка получения последнего айди
export const $fetchLastIdError = restore<Error>(getLastIdFx.failData, null);

// Статус запроса
export const $lastIdGetStatus = combine({
    loadingLastId: getLastIdFx.pending,
    errorLastId: $fetchLastIdError,
    lastId: $lastId
});


// обновление хранилища (редьюсер принимает текущее состояние и пэйлоад)
$lastId
    .on(getLastIdFx.doneData, (_, data) => data.data);



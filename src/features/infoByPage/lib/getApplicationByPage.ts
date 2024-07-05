import {getCurrApplicationsFx, PagesInfoType} from "features/infoByPage";
import {ApplicationType} from "shared/lib/types";

export const getApplicationsInfo = (page: number): ApplicationType[] => {
    let data: ApplicationType[] = [];
    getCurrApplicationsFx(page).then(res => {
        data = res.data;
    })
    return data;
}

export const getPagesInfo = (page: number): PagesInfoType => {
    let info: PagesInfoType = {first: 0, items: 0, last: 0, next: 0, pages: 0, prev: 0};
    getCurrApplicationsFx(page).then(res => {
        info.pages = res.pages;
        info.last = res.last;
        info.prev = res.prev;
        info.next = res.next;
        info.items = res.items;
        info.first = res.first;

    })
    return info;
}
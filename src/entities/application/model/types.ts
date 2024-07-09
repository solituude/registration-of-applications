import {ApplicationType} from "shared/lib/types";

export type PagesInfoType = {
    first: number,
    items: number,
    last: number,
    next: number,
    pages: number,
    prev: number
}

export type ResponseCurrApplicationsType = {
    data: ApplicationType[],
    first: number,
    items: number,
    last: number,
    next: number,
    pages: number,
    prev: number
}


export type RequestSearchType = {
    page: number,
    name: string
}
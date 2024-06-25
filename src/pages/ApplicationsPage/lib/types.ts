import {ApplicationType} from "../../../shared/types/types";

export interface ApplicationTableProps {
    applications: ApplicationType[]
}

export interface IResponseCurrApplications {
    data: ApplicationType[],
    first: number,
    items: number,
    last: number,
    next: number,
    pages: number,
    prev: number
}


import {ApplicationType} from "../../../shared/types/types";
import React from "react";

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

export type ModalFormProps = {
    application: ApplicationType,
    setApplication:  React.Dispatch<React.SetStateAction<ApplicationType>>
}

export type MapViewProps = {
    lat: number,
    lon: number
}
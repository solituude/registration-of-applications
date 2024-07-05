import {ApplicationType} from "shared/lib/types";
import React from "react";

export type ModalFormProps = {
    application: ApplicationType,
    setApplication:  React.Dispatch<React.SetStateAction<ApplicationType>>
}

export type MapViewProps = {
    lat: number,
    lon: number
}
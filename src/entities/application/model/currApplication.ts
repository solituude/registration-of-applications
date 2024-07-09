import {createEvent, createStore} from "effector";
import {ApplicationType} from "shared/lib/types";

export const $currApplication = createStore<ApplicationType>({
    id: "", phone: "", name: "", coordinates: [0, 0], priority: "", accidentType: "", address: ""
});

export const handleUpdateCurrApplication = createEvent<ApplicationType>();
const updateCurrApplication = (_: ApplicationType, data: ApplicationType) => {

    return {...data, coordinates: [data.coordinates[0], data.coordinates[1]]};
}

$currApplication
    .on(handleUpdateCurrApplication, updateCurrApplication);
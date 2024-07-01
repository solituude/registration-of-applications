import {$allApplications, getAllApplicationsFx} from "./allApplicationsModel";
import {getAllApplication} from "../api/api";

getAllApplicationsFx.use(getAllApplication);

$allApplications
    .on(getAllApplicationsFx.doneData, (_, data) => data);
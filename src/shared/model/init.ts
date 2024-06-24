import {$allApplications, getAllApplicationsFx} from "./index";
import {getAllApplication} from "../api";

getAllApplicationsFx.use(getAllApplication);

$allApplications
    .on(getAllApplicationsFx.doneData, (_, data) => data);
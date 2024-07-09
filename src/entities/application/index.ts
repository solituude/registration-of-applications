export {
    $currApplication,
    handleUpdateCurrApplication
} from './model/currApplication';
export {getApplicationsByPage} from './api';
export {
    $currApplications,
    getCurrApplicationsFx,
    $fetchCurrApplicationError,
    $currApplicationsGetStatus
} from 'entities/application/model/currApplicationsModel';

export type {
    PagesInfoType,
    ResponseCurrApplicationsType,
} from 'entities/application/model/types';

export {
    $currPage,
    handleUpdatePage
} from 'entities/application/model/currPageModel';

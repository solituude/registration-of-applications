export {getApplicationsByPage} from './api';
export {
    $currApplications,
    getCurrApplicationsFx,
    $fetchCurrApplicationError,
    $currApplicationsGetStatus
} from './model/currApplicationsModel';

export type {
    PagesInfoType,
    ResponseCurrApplicationsType,
} from './model/types';

export {
    $currPage,
    handleUpdatePage
} from './model/currPageModel';

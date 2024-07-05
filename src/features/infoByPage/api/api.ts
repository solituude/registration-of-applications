import {ResponseCurrApplicationsType} from "features/infoByPage";

export const getApplicationsByPage = async (page: number): Promise<ResponseCurrApplicationsType> => {
    const response = await fetch(`/allApplications?_page=${page}&_per_page=15`, {
        method: "GET",
    });
    return await response.json();
}
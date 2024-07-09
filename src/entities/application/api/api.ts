import {ResponseCurrApplicationsType} from "entities/application";
import {RequestSearchType} from "entities/application/model/types";
// получение всех заявок
export const getAllApplication = async () => {
    try {
        const response = await fetch('/allApplications', {
            method: "GET",
        });
        return await response.json();
    } catch (e) {
        console.log(e);
    }
}

// получение заявок по выбранной странице
export const getApplicationsByPage = async (page: number): Promise<ResponseCurrApplicationsType> => {
    const response = await fetch(`/allApplications?_page=${page}&_per_page=15`, {
        method: "GET",
    });
    return await response.json();
}

// получение заявок по поиску по имени
export const searchApplicationByName = async (data: RequestSearchType): Promise<ResponseCurrApplicationsType> => {
    const response = await fetch(`/allApplications?name=${data.name}&_page=${data.page}&_per_page=15`, {
        method: "GET",
    });
    return await response.json();
}
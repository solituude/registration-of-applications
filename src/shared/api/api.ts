import {IResponseCurrApplications} from "../../pages/ApplicationsPage/lib/types";
import {ApplicationType} from "../types/types";

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

export const getApplicationsByPage = async (page: number): Promise<IResponseCurrApplications> => {
    const response = await fetch(`/allApplications?_page=${page}&_per_page=15`, {
        method: "GET",
    });
    return await response.json();
}

export const getApplicationById = async (id: number): Promise<ApplicationType> => {
    const response = await fetch(`/allApplications/${id}`, {
        method: "GET",
    });

    return await response.json();
}

export const putApplicationById = async (application: ApplicationType): Promise<ApplicationType> => {
    const response = await fetch(`/allApplications/${application.id}`, {
        method: "PUT",
        body: JSON.stringify(application),
    });
    return await response.json();
}

export const postApplicationById = async (application: ApplicationType): Promise<ApplicationType> => {
    const response = await fetch(`/allApplications`, {
        method: "POST",
        body: JSON.stringify(application),
    });
    return await response.json();
}


export const getLastId = async (): Promise<{ data: number }> => {
    const response = await fetch('/lastID', {
        method: "GET"
    });
    return await response.json();
}

export const postLastId = async (newId: number): Promise<{ data: number }> => {
    const response = await fetch('/lastID', {
        method: "PUT",
        body: JSON.stringify({data: newId}),
    });
    return await response.json();
}

import {IResponseCurrApplications} from "../../pages/ApplicationsPage/lib/types";

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

export const getCountPages = async () => {
    try {
        const response = await fetch('/countPages', {
            method: "GET",
        });
        return await response.json();
    } catch (e) {
        console.log(e);
    }
}


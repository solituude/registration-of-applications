import {ApplicationType} from "shared/lib/types";

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

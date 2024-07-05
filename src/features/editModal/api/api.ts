import {ApplicationType} from "shared/lib/types";

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
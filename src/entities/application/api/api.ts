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

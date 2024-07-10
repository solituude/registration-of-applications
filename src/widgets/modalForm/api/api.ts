export const getLastId = async (): Promise<{ data: number }> => {
    const response = await fetch('/lastID', {
        method: "GET"
    });
    return await response.json();
}
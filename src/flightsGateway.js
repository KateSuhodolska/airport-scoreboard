const baseUrl = `https://api.iev.aero/api/flights`;

export const fetchFlightsList = (date) => {
    return fetch(`${baseUrl}/${date}`).then((response) => {
        if (!response.ok) {
            throw new Error("Failed to load flights");
        } else return response.json();
    });
};
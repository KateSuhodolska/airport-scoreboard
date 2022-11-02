export const flightsDepartureSelector = (state) => {
    const departures = state.flights.departure || [];

    const includeStr = (key) =>
        key.toLowerCase().includes(state.filterText.toLowerCase());

    return departures
        .slice()
        .filter(
            (flight) =>
            includeStr(flight.codeShareData[0].codeShare) ||
            includeStr(flight["airportToID.city_en"]) ||
            includeStr(flight.airline.en.name)
        );
};

export const flightsArrivalSelector = (state) => {
    const arrivals = state.flights.arrival || [];

    const includeStr = (key) =>
        key.toLowerCase().includes(state.filterText.toLowerCase());

    return arrivals
        .slice()
        .filter(
            (flight) =>
            includeStr(flight.codeShareData[0].codeShare) ||
            includeStr(flight["airportFromID.city_en"]) ||
            includeStr(flight.airline.en.name)
        );
};
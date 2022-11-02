import * as flightsGateway from "./flightsGateway";
export const GET_FLIGHTS_LIST = "GET_FLIGHTS_LIST";
export const SEARCH_FLIGHTS = "SEARCH_FLIGHTS";
export const FETCHING_DATA = "FETCHING_DATA";

export const getFlightsList = (flightsData) => {
    return {
        type: GET_FLIGHTS_LIST,
        payload: flightsData,
    };
};

export const isFetching = () => {
    return {
        type: FETCHING_DATA,
    };
};

export const fetchFlightsList = (date) => {
    return function(dispatch) {
        dispatch(isFetching());
        flightsGateway.fetchFlightsList(date).then((flightsData) => {
            dispatch(isFetching());
            dispatch(getFlightsList(flightsData));
        });
    };
};

export const searchFlightsList = (filterText) => {
    return {
        type: SEARCH_FLIGHTS,
        payload: filterText,
    };
};
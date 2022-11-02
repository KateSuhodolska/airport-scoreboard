import {
    GET_FLIGHTS_LIST,
    SEARCH_FLIGHTS,
    FETCHING_DATA,
} from "./flights.actions";

const initState = {
    flights: [],
    filterText: "",
    isFetching: false,
};

export const flightsReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_FLIGHTS_LIST:
            return {
                ...state,
                flights: action.payload.body,
            };
        case SEARCH_FLIGHTS:
            return {
                ...state,
                filterText: action.payload,
            };
        case FETCHING_DATA:
            return {
                ...state,
                isFetching: !state.isFetching,
            };

        default:
            return state;
    }
};
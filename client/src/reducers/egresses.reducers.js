import {
    GET_EGRESSES_CATEGORIES,
    GET_EGRESSES_CATEGORIES_ERROR,
    GET_EGRESSES_CATEGORIES_SUCCESS,
} from "../types/egresses.types";

const initialState = {
    egressesCategories: [],
    loading: false,
    error: null,

}

const egressesReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_EGRESSES_CATEGORIES:
            return {
                ...state,
                loading: true,
            };
        case GET_EGRESSES_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                egressesCategories: action.payload,
            };
        case GET_EGRESSES_CATEGORIES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default egressesReducers;
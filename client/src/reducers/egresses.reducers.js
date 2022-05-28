import {
    ADD_EGRESS,
    ADD_EGRESS_ERROR,
    ADD_EGRESS_SUCCESS,
    GET_EGRESSES_CATEGORIES,
    GET_EGRESSES_CATEGORIES_ERROR,
    GET_EGRESSES_CATEGORIES_SUCCESS,
    GET_EGRESSES_SUBCATEGORIES,
    GET_EGRESSES_SUBCATEGORIES_ERROR,
    GET_EGRESSES_SUBCATEGORIES_SUCCESS,
} from "../types/egresses.types";

const initialState = {
    egresses: [],
    egressesCategories: [],
    egressesSubcategories: [],
    loading: false,
    error: null,
};

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
        case GET_EGRESSES_SUBCATEGORIES:
            return {
                ...state,
                loading: true,
            };
        case GET_EGRESSES_SUBCATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                egressesSubcategories: action.payload,
            };
        case GET_EGRESSES_SUBCATEGORIES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case ADD_EGRESS:
            return {
                ...state,
                loading: true,
            };
        case ADD_EGRESS_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload
            }
        case ADD_EGRESS_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            }
        

        default:
            return state;
    }
};

export default egressesReducers;
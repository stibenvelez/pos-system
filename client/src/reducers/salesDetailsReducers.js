import {
    GET_SALES_DETAILS,
    GET_SALES_DETAILS_ERROR,
    GET_SALES_DETAILS_SUCCESS,
    GET_SALE_DETAIL_BY_ID_SALE,
    GET_SALE_DETAIL_BY_ID_SALE_SUCCESS,
    GET_SALE_DETAIL_BY_ID_SALE_ERROR,
} from "../types/salesDetailsTypes";

const initialState = {
    salesDetails: [],
    error: false,
    loading: true,
};

const salesDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SALES_DETAILS:
            return {
                ...state,
                loading: true,
            };

        case GET_SALES_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                salesDetails: action.payload,
                error: false,
            };
        case GET_SALES_DETAILS_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            };
        case GET_SALE_DETAIL_BY_ID_SALE:
            return {
                ...state,
                loading: true,
                error: true,
            };

        case GET_SALE_DETAIL_BY_ID_SALE_SUCCESS:
            return {
                ...state,
                loading: false,
                salesDetails: action.payload,
            };
        case GET_SALE_DETAIL_BY_ID_SALE_ERROR:
            return {
                ...state,
                loading: false,
            };
        

        default:
            return state;
    }
};

export default salesDetailsReducer;

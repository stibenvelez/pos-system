import {
    GET_SALES_REPORTS,
    GET_SALES_REPORTS_SUCCESS,
    GET_SALES_REPORTS_ERRORS,
    GET_FILTERS,
} from "../types/reportsTypes";

const initialState = {
    sales: [],
    loading: true,
    filters:{dateFrom: '2022-05-01',
dateTo: '2022-05-31'}
};

const reportsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SALES_REPORTS:
            return {
                ...state,
                loading: true,
            };
        case GET_SALES_REPORTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                sales: action.payload,
            };
        case GET_SALES_REPORTS_ERRORS:
            return {
                ...state,
                loading: false,
                error: true,
            };
        case GET_FILTERS:
            return {
                ...state,
                loading: false,
                error: false,
                filters: action.payload,
            };

        default:
            return state;
    }
};

export default reportsReducer;

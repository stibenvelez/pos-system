import clienteAxios from "../config/axios";
import {
    GET_SALES_REPORTS,
    GET_SALES_REPORTS_SUCCESS,
    GET_SALES_REPORTS_ERRORS,
    GET_FILTERS,
} from "../types/reportsTypes";

export const getSalesReportAction = (filters) => {
    return async (dispatch) => {
        dispatch({
            type: GET_SALES_REPORTS,
        });
        try {
            const result = await clienteAxios.get("/reports/sales", {
                params: filters ,
            });

            dispatch({
                type: GET_SALES_REPORTS_SUCCESS,
                payload: result.data,
            });
        } catch (error) {
            dispatch({
                type: GET_SALES_REPORTS_ERRORS,
            });
        }
    };
};

export const getReportrFiltersAction = (filters) => {
    return async (dispatch) => {
        //dispatch(getSalesReportAction(filters));
        dispatch({
            type: GET_FILTERS,
            payload: filters,
        });
    };
};

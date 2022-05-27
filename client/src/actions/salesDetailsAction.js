import clienteAxios from "../config/axios";
import {
    GET_SALES_DETAILS,
    GET_SALES_DETAILS_ERROR,
    GET_SALES_DETAILS_SUCCESS,
    GET_SALE_DETAIL_BY_ID_SALE,
    GET_SALE_DETAIL_BY_ID_SALE_ERROR,
    GET_SALE_DETAIL_BY_ID_SALE_SUCCESS,
} from "../types/salesDetailsTypes";

export const getAllSalesDetailsAction = () => {
    return async (dispatch) => {
        dispatch(getAllSalesDetails());
        try {
            const sales = await clienteAxios.get(`/sales-details`);
            dispatch(getAllSalesDetailsSuccess(sales.data));
        } catch (error) {
            dispatch(getAllSalesDetailsError(error));
        }
    };
};

const getAllSalesDetails = () => ({
    type: GET_SALES_DETAILS,
});
const getAllSalesDetailsSuccess = (salesDetails) => ({
    type: GET_SALES_DETAILS_SUCCESS,
    payload: salesDetails,
});
const getAllSalesDetailsError = (error) => ({
    type: GET_SALES_DETAILS_ERROR,
    payload: error,
});

export const getSaleDetailByIdSaleAction = (idSale) => {
    return async (dispatch) => {
        dispatch(getSaleDetailByIdSale());
        try {
            const salesDetails = await clienteAxios.get(
                `/sales-details/search-by-idsale/${idSale}`
            );
            dispatch(getSaleDetailByIdSaleSuccess(salesDetails.data));
        } catch (error) {
            dispatch(getSaleDetailByIdSaleError(error));
        }
    };
};

const getSaleDetailByIdSale = () => ({
    type: GET_SALE_DETAIL_BY_ID_SALE,
});
const getSaleDetailByIdSaleSuccess = (salesDetails) => ({
    type: GET_SALE_DETAIL_BY_ID_SALE_SUCCESS,
    payload: salesDetails,
});
const getSaleDetailByIdSaleError = (error) => ({
    type: GET_SALE_DETAIL_BY_ID_SALE_ERROR,
    payload: error,
});



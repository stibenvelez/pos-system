import clienteAxios from "../config/axios";
import { ToastContainer, toast } from "react-toastify";
import {
    ADD_NEW_PRODUCT_DETAIL,
    REMOVE_ITEM_PRODUCT_DETAIL,
    READ_DATA_NEW_SALE,
    POST_NEW_SALE,
    POST_NEW_SALE_SUCCESS,
    POST_NEW_SALE_ERROR,
    GET_ALL_SALES,
    GET_ALL_SALES_SUCCESS,
    GET_ALL_SALES_ERROR,
    FILTER_SALES_LIST,
} from "../types/salesTypes";

// add new product to sail detail
export const addProductToSaleDetailAction = (product) => {
    return (dispatch) => {
        dispatch(addProductToSaleDetail(product));
    };
};

const addProductToSaleDetail = (product) => ({
    type: ADD_NEW_PRODUCT_DETAIL,
    payload: product,
});

// remove item from sale detail
export const removeItemFromSaleDetailAction = (id) => {
    return (dispatch) => {
        dispatch(removeItemFromSaleDetail(id));
        toast.success("Producto eliminado!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
    };
};

const removeItemFromSaleDetail = (id) => ({
    type: REMOVE_ITEM_PRODUCT_DETAIL,
    payload: id,
});

// read data new sale
export const readDataNewSaleAction = (dataSale) => {
    return (dispatch) => {
        dispatch(readDataNewSale(dataSale));
    };
};

const readDataNewSale = (dataSale) => ({
    type: READ_DATA_NEW_SALE,
    payload: dataSale,
});

// GET ALL SALES 
export const getAllSalesAction = (filters) => {
    return async (dispatch) => {
        dispatch(getAllSales());
        const sales = await clienteAxios.get(`/sales`,{ params: filters });

        try {
            dispatch(getAllSalesSuccess(sales.data));
        } catch (error) {
            dispatch(getAllSalesError());
        }
    };
};

const getAllSales = () => ({
    type: GET_ALL_SALES,
});

const getAllSalesSuccess = (sales) => ({
    type: GET_ALL_SALES_SUCCESS,
    payload: sales,
});

const getAllSalesError = () => ({
    type: GET_ALL_SALES_ERROR,
});

// Register one new sale
export const RegisterOneNewSaleAction = (sale) => {
    return async (dispatch) => {
        dispatch(registerNewSale(sale));
        const ressult = await clienteAxios.post("/sales", sale);
        
        toast.success(ressult.data.msg, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
        try {
            dispatch(registerNewSaleSuccess());
        } catch (error) {
            dispatch(registerNewSaleError());
        }
    };
};

const registerNewSale = () => ({
    type: POST_NEW_SALE,
});

const registerNewSaleSuccess = () => ({
    type: POST_NEW_SALE_SUCCESS,
});

const registerNewSaleError = () => ({
    type: POST_NEW_SALE_ERROR,
});


// filter Sales list
export const FilterSalesListAction = filter => {
    return async dispatch => {
        dispatch(filterSales(filter));
    }
}

const filterSales = (filters) => ({
    type: FILTER_SALES_LIST,
    payload: filters,
});
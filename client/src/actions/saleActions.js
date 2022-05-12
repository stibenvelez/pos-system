import clienteAxios from "../config/axios";
import { ToastContainer, toast } from "react-toastify";
import {
    ADD_NEW_PRODUCT_DETAIL,
    REMOVE_ITEM_PRODUCT_DETAIL,
    POST_NEW_SALE,
    POST_NEW_SALE_SUCCESS,
    POST_NEW_SALE_ERROR,
    GET_ALL_SALES,
    GET_ALL_SALES_SUCCESS,
    GET_ALL_SALES_ERROR,
    FILTER_SALES_LIST,
    ADD_NEW_PRODUCT_ERROR,
    GET_SALE_BY_ID,
    GET_SALE_BY_ID_SUCCES,
    GET_SALE_BY_ID_ERROR,
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


export const validateErrorsNewProductAction = (errors) => {
    return (dispatch) => {
        dispatch(validateErrors(errors));
    };
};

const validateErrors = (errors) => ({
    type: ADD_NEW_PRODUCT_ERROR,
    payload: errors,
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


// GET ALL SALES
export const getAllSalesAction = (filters) => {
    return async (dispatch) => {
        dispatch(getAllSales());
        
        try {
            const sales = await clienteAxios.get(`/sales`, { params: filters });
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

//get sale by id
export const getSaleByIdAction = id => {
    return async dispatch => {
        dispatch(getSaleByid())
        try {
            const sale = await clienteAxios.get(`/sales/${id}`);
            dispatch(getSaleByidSucces(sale.data));
        } catch (error) {
            dispatch(getSaleByidError(error));
        }
    }
}

const getSaleByid=()=>({
    type: GET_SALE_BY_ID
});
const getSaleByidSucces=(sale)=>({
    type: GET_SALE_BY_ID_SUCCES,
    payload: sale
});

const getSaleByidError=(error)=>({
    type: GET_SALE_BY_ID_ERROR,
    payload: error
});

// Register one new sale
export const RegisterOneNewSaleAction = (sale) => {
    return async (dispatch) => {
        dispatch(registerNewSale(sale));

        try {
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
export const FilterSalesListAction = (filter) => {
    return async (dispatch) => {
        dispatch(filterSales(filter));
    };
};

const filterSales = (filters) => ({
    type: FILTER_SALES_LIST,
    payload: filters,
});

import clienteAxios from "../config/axios";
import { ToastContainer, toast } from "react-toastify";
import {
    ADD_NEW_PRODUCT_DETAIL,
    REMOVE_ITEM_PRODUCT_DETAIL,
    READ_DATA_NEW_SALE,
    POST_NEW_SALE,
    POST_NEW_SALE_SUCCESS,
    POST_NEW_SALE_ERROR,
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

const readDataNewSale = (product) => ({
    type: READ_DATA_NEW_SALE,
    payload: product,
});


// Register one new sale
export const RegisterOneNewSaleAction = (sale) => {
    return async dispatch => {
        dispatch(registerNewSale())
        const res = await clienteAxios.post('/sales', sale)

        try {
            dispatch(registerNewSaleSuccess())
        } catch (error) {
            dispatch(registerNewSaleError());
        }
    }
}

const registerNewSale = ()=>({
    type: POST_NEW_SALE
})

const registerNewSaleSuccess = ()=>({
    type: POST_NEW_SALE_SUCCESS
})

const registerNewSaleError = ()=>({
    type: POST_NEW_SALE_ERROR
})


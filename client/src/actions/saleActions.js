import clienteAxios from "../config/axios";
import { ADD_NEW_PRODUCT_DETAIL, ADD_NEW } from "../types/salesTypes";

// add new product to sail detail
export const addProductToSailDetailAction = (product) => {
    return (dispatch) => {
        dispatch(addProductToSailDetailSuccess(product));
    };
};

const addProductToSailDetailSuccess = (product) => ({
    type: ADD_NEW_PRODUCT_DETAIL,
    payload: product,
});

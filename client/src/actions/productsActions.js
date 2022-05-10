import clienteAxios from "../config/axios";
import {
    ADD_NEW_PRODUCT,
    ADD_NEW_PRODUCT_ERROR,
    ADD_NEW_PRODUCT_SUCCESS,
    FETCH_PRODUCTS,
    FETCH_PRODUCTS_ERROR,
    FETCH_PRODUCTS_SUCCESS,
} from "../types/productsTypes";

// get products
export const getAllProductsActions = () => {
    return async (dispatch) => {
        dispatch(getProducts());

        try {
            const res = await clienteAxios.get("/products");
            dispatch(getProductsSuccess(res.data));
        } catch (error) {
            console.log(error);
            dispatch(getProductsError());
        }
    };
};

const getProducts = () => ({
    type: FETCH_PRODUCTS,
});
const getProductsSuccess = (products) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
});
const getProductsError = () => ({
    type: FETCH_PRODUCTS_ERROR,
});

//ADD NEW PRODUCT
export const addNewProductAction = (product) => {
    return async (dispatch) => {
        dispatch(addNewProduct());
        try {
            await clienteAxios.post(`/products`, product);
            dispatch(adNewPrdroductSucces());
        } catch (error) {
            dispatch(adNewPrdroductErrror(error));
        }
    };
};

const addNewProduct = () => ({
    type: ADD_NEW_PRODUCT,
});

const adNewPrdroductSucces = (product) => ({
    type: ADD_NEW_PRODUCT_SUCCESS,
    payload: product,
});

const adNewPrdroductErrror = (error) => ({
    type: ADD_NEW_PRODUCT_ERROR,
    payload: error,
});

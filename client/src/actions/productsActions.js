import clienteAxios from "../config/axios";
import {
    ADD_NEW_PRODUCT,
    ADD_NEW_PRODUCT_ERROR,
    ADD_NEW_PRODUCT_SUCCESS,
    EDIT_PRODUCT,
    EDIT_PRODUCT_ERROR,
    EDIT_PRODUCT_SUCCESS,
    FETCH_PRODUCTS,
    FETCH_PRODUCTS_ERROR,
    FETCH_PRODUCTS_SUCCESS,
    FILTER_PRODUCTS,
    GET_PRODUCT,
    GET_PRODUCT_ERROR,
    GET_PRODUCT_SUCCESS,
} from "../types/productsTypes";

// get products
export const getAllProductsActions = (filters) => {
    return async (dispatch) => {
        dispatch(getProducts());

        try {
            const res = await clienteAxios.get("/products", {
                params: filters,
            });
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

// GET PRODUCT BY ID
export const getProductByIdAction = (id) => {
    return async (dispatch) => {
        dispatch(getProductById());

        try {
            const res = await clienteAxios.get(`/products/${id}`);
            dispatch(getProductByIdSuccess(res.data[0]));
        } catch (error) {
            console.log(error);
            dispatch(getProductByIdError());
        }
    };
};

const getProductById = () => ({
    type: GET_PRODUCT,
});
const getProductByIdSuccess = (product) => ({
    type: GET_PRODUCT_SUCCESS,
    payload: product,
});
const getProductByIdError = () => ({
    type: GET_PRODUCT_ERROR,
});

// EDIT PRODUCT BY ID
export const editProductByIdAction = (product) => {
    return async (dispatch) => {
        dispatch(editProductById());
        try {
            const res = await clienteAxios.put(
                `/products/${product.id}`,
                product
            );
            dispatch(editProductByIdSuccess(res.data[0]));
            dispatch(getProductByIdAction(product.idProduct));
        } catch (error) {
            console.log(error);
            dispatch(editProductByIdError());
        }
    };
};

const editProductById = () => ({
    type: EDIT_PRODUCT,
});
const editProductByIdSuccess = (product) => ({
    type: EDIT_PRODUCT_SUCCESS,
    payload: product,
});
const editProductByIdError = () => ({
    type: EDIT_PRODUCT_ERROR,
});

//ADD NEW PRODUCT
export const addNewProductAction = (product) => {
    return async (dispatch) => {
        dispatch({
            type: ADD_NEW_PRODUCT,
        });
        try {
            await clienteAxios.post(`/products`, product);
            dispatch({
                type: ADD_NEW_PRODUCT_SUCCESS,
                payload: product,
            });
        } catch (error) {
            dispatch({
                type: ADD_NEW_PRODUCT_ERROR,
                payload: error,
            });
        }
    };
};


// FILTERS PRODUCT
export const filterProductsAction = filters => {
    return async dispatch => {
        dispatch({
            type: FILTER_PRODUCTS,
            payload: filters
        })
    }
}
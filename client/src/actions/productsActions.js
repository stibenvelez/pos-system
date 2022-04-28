import axios from 'axios'
import clienteAxios from '../config/axios';
import {
    FETCH_PRODUCTS,
    FETCH_PRODUCTS_ERROR,
    FETCH_PRODUCTS_SUCCESS,
} from "../types/productsTypes";

// get products
export const getAllProductsActions = () => {
    return async (dispatch) => {
        dispatch(getProducts());
       
        try {
            const res = await clienteAxios('/products');
            dispatch(getProductsSuccess(res.data));
        } catch (error) {
            console.log(error)
            dispatch(getProductsError());
        }
    };
}

const getProducts = () => ({
    type: FETCH_PRODUCTS
})
const getProductsSuccess = (products) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
});
const getProductsError = () => ({
    type: FETCH_PRODUCTS_ERROR
});


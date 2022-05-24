import clienteAxios from "../config/axios"
import { GET_PRODUCT_CATEGORY, GET_PRODUCT_CATEGORY_ERROR, GET_PRODUCT_CATEGORY_SUCCESS } from "../types/productCategory.types"


export const getAllProductsCategoriesAction = () => {
    return async dispatch => {
        dispatch({
            type: GET_PRODUCT_CATEGORY
        })
        try {
            const res = await clienteAxios("/product-categories")
            dispatch({
                type: GET_PRODUCT_CATEGORY_SUCCESS,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: GET_PRODUCT_CATEGORY_ERROR
            });
        }
    }
}
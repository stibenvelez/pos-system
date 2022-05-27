import clienteAxios from '../config/axios';
import { GET_EGRESSES_CATEGORIES, GET_EGRESSES_CATEGORIES_ERROR, GET_EGRESSES_CATEGORIES_SUCCESS } from "../types/egresses.types";



export const getAllEgressesCategoriesAction = () => {
    return async (dispatch) => {
        dispatch({
            type: GET_EGRESSES_CATEGORIES,
        });
        try {
            const res = await clienteAxios("/egresses/categories");
            dispatch({
                type: GET_EGRESSES_CATEGORIES_SUCCESS,
                payload: res.data,
            });
        } catch (error) {
            console.log(error);
            dispatch({
                type: GET_EGRESSES_CATEGORIES_ERROR
            });
        }
    };
};
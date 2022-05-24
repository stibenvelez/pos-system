import {
    GET_PRODUCT_CATEGORY,
    GET_PRODUCT_CATEGORY_ERROR,
    GET_PRODUCT_CATEGORY_SUCCESS,
} from "../types/productCategory.types";

const initialState = {
    productsCategories:[]
};

const productsCategoriesReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_CATEGORY:
            return {
                ...state,
                loading: true
            };
        case GET_PRODUCT_CATEGORY_SUCCESS: 
            return {
                ...state,
                loading: false,
                productsCategories:action.payload
            };
        case GET_PRODUCT_CATEGORY_ERROR: 
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}

export default productsCategoriesReducers;
import {
    ADD_NEW_PRODUCT,
    ADD_NEW_PRODUCT_ERROR,
    ADD_NEW_PRODUCT_SUCCESS,
    FETCH_PRODUCTS,
    FETCH_PRODUCTS_ERROR,
    FETCH_PRODUCTS_SUCCESS,
} from "../types/productsTypes";

const initialState = {
    products: [],
    error: null,
    loading: false,
};

const productsReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_PRODUCT:
        case FETCH_PRODUCTS:
            return {
                ...state,
                loading: true,
            };
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
                error: false,
            };

        case FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                error: false,
            };

        case ADD_NEW_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                msg: action.payload,
            };
        case ADD_NEW_PRODUCT_ERROR:
            return {
                ...state,
                loading: false,
                msg: action.payload,
            };

        default:
            return state;
    }
};

export default productsReducers;

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
    GET_PRODUCT,
    GET_PRODUCT_ERROR,
    GET_PRODUCT_SUCCESS,
} from "../types/productsTypes";

const initialState = {
    products: [],
    product:{},
    error: null,
    loading: false,
};

const productsReducers = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_PRODUCT:
        case GET_PRODUCT:
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
        case EDIT_PRODUCT_ERROR:
        case GET_PRODUCT_ERROR:
        case FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                error: false,
            };
        case EDIT_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                product: action.payload,
                error: false,
            };

        case GET_PRODUCT:
            return {
                ...state,
                loading: false,
                product: action.payload,
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

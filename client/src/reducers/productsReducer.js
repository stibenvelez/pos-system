import {
    ADD_NEW_PRODUCT,
    ADD_NEW_PRODUCT_ERROR,
    ADD_NEW_PRODUCT_SUCCESS,
    DISABLE_PRODUCT,
    DISABLE_PRODUCT_ERROR,
    DISABLE_PRODUCT_SUCCESS,
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

const initialState = {
    products: [],
    product: {},
    error: null,
    loading: false,
    filters: {
        category: "",
    },
};

const productsReducers = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_PRODUCT:
        case GET_PRODUCT:
        case FETCH_PRODUCTS:
            return {
                ...state,
                loading: true,
                product: {},
            };
        case ADD_NEW_PRODUCT:
            return {
                ...state,
                loading: true
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
        case FILTER_PRODUCTS:
            return {
                ...state,
                filters: action.payload,
            };
        case DISABLE_PRODUCT:
            return {
                ...state,
            }
        
        case DISABLE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: state.products.filter(
                    (product) => product.idProduct !== action.payload
                ),
            };
        case DISABLE_PRODUCT_ERROR:
            return {
                ...state,
                loading: false,

            };

        default:
            return state;
    }
};

export default productsReducers;

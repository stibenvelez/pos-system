import {
    ADD_NEW_PRODUCT_DETAIL,
    REMOVE_ITEM_PRODUCT_DETAIL,
    READ_DATA_NEW_SALE,
    GET_ALL_SALES_SUCCESS,
    GET_ALL_SALES,
    POST_NEW_SALE,
    POST_NEW_SALE_SUCCESS,
    POST_NEW_SALE_ERROR,
    FILTER_SALES_LIST,
    ADD_NEW_PRODUCT_ERROR,
    GET_SALE_BY_ID,
    GET_SALE_BY_ID_SUCCES,
    GET_SALE_BY_ID_ERROR,
} from "../types/salesTypes";

const initialState = {
    sales: [],
    sale:{},
    producttoremove: {},
    newSale: {
        dataSale: {
            date: "2022-04-24",
            documentType: 1,
            document: "",
        },
        detail: [],
    },
    loading: true,
    filters: {
        category: "",
        dateFrom: "2022-05-01",
        dateTo: "2022-05-31",
        state: "1",
    },
    errorsNewProduct:{}
};

const salesReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_SALES:
            return {
                ...state,
                loading: true,
            };
        case GET_ALL_SALES_SUCCESS:
            return {
                ...state,
                sales: action.payload,
                loading: false,
            };
        
        case GET_SALE_BY_ID:
            return {
                ...state,
                loading: true
            };
        
        case GET_SALE_BY_ID_SUCCES:
            return {
                ...state,
                loading: false,
                sale: action.payload
            };
        
        case GET_SALE_BY_ID_ERROR:
            return {
                ...state,
                loading: false,
                error:action.payload
            };
        
        case POST_NEW_SALE:
            return {
                ...state,
                loading: true,
            };
        case POST_NEW_SALE_SUCCESS:
            return {
                ...state,
                loading: false,
                newSale:initialState.newSale
            };
        case POST_NEW_SALE_ERROR:
            return {
                ...state,
                loading: false,
            };
        case ADD_NEW_PRODUCT_DETAIL:
            return {
                ...state,
                newSale: {
                    dataSale: { ...state.newSale.dataSale },
                    detail: [...state.newSale.detail, action.payload],
                },
                errorsNewProduct: false,
            };
        case ADD_NEW_PRODUCT_ERROR:
            return {
                ...state,
                errorsNewProduct: action.payload,
            };
        case REMOVE_ITEM_PRODUCT_DETAIL:
            return {
                ...state,
                newSale: {
                    dataSale: { ...state.newSale.dataSale },
                    detail: [...state.newSale.detail].filter(
                        (item) => item.id != action.payload
                    ),
                },
            };
        case READ_DATA_NEW_SALE:
            return {
                ...state,
                newSale: {
                    dataSale: action.payload,
                    detail: [...state.newSale.detail],
                },
            };
        case FILTER_SALES_LIST:
            return {
                ...state,
                filters: action.payload,
            };

        default:
            return state;
    }
};

export default salesReducers;

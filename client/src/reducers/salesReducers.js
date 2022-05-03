import {
    ADD_NEW_PRODUCT_DETAIL,
    REMOVE_ITEM_PRODUCT_DETAIL,
    READ_DATA_NEW_SALE,
    GET_ALL_SALES_SUCCESS,
    GET_ALL_SALES,
    FILTER_SALES_LIST,
} from "../types/salesTypes";

const initialState = {
    sales: [],
    producttoremove: {},
    newSale: {
        dataSale: {
            date: "2022-04-24",
            documentType: 1,
            document: "1020455645",
            uniPrice: 0,
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
        case ADD_NEW_PRODUCT_DETAIL:
            return {
                ...state,
                newSale: {
                    dataSale: { ...state.newSale.dataSale },
                    detail: [...state.newSale.detail, action.payload],
                },
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

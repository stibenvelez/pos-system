import { ADD_NEW_PRODUCT_DETAIL, REMOVE_ITEM_PRODUCT_DETAIL, READ_DATA_NEW_SALE } from "../types/salesTypes";

const initialState = {
    sales: [],
    producttoremove: {},
    newSale: {
        dataSale: { date: "2022-04-24", documentType: 1, document: "", uniPrice: 0 },
        detail: [],
    },
};

const salesReducers = (state = initialState, action) => {
    

    switch (action.type) {
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
                }
            };
        case READ_DATA_NEW_SALE:
            return {
                ...state,
                newSale: {
                    dataSale: action.payload,
                    detail: [...state.newSale.detail]
                }
            };

        default:
            return state;
    }
};

export default salesReducers;

import { ADD_NEW_PRODUCT_DETAIL } from "../types/salesTypes";

const initialState = {
    sales: [],
    salesDetail: [],
};

const salesReducers = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NEW_PRODUCT_DETAIL:
            return {
                ...state,
                salesDetail: [...state.salesDetail, action.payload],
            };
        default:
            return state;
    }
};

export default salesReducers;

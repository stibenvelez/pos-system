import { combineReducers } from "redux";
import productsReducers from "./productsReducer";
import salesReducers from "./salesReducers";

export default combineReducers({
    products: productsReducers,
    sales: salesReducers
});

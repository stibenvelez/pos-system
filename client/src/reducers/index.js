import { combineReducers } from "redux";
import productsReducers from "./productsReducer";

export default combineReducers({
    products: productsReducers,
});

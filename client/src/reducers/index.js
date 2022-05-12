import { combineReducers } from "redux";
import productsReducers from "./productsReducer";
import salesReducers from "./salesReducers";
import salesDetailsReducers from "./salesDetailsReducers";
import authReducer from "./authReducer";


export default combineReducers({
    products: productsReducers,
    sales: salesReducers,
    salesDetails: salesDetailsReducers,
    auth: authReducer,
});

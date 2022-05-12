import {
    AUTH,
    AUTH_SUCCES,
    AUTH_ERROR,
    LOGIN,
    LOGIN_SUCCES,
    LOGIN_ERROR,
} from "../types/authTypes";

const initialState = {
    auth: false,
    user: {},
    loading:true
};
const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case AUTH:
            return {
                ...state,
                loading: true,
                auth: false,
            };

        case AUTH_SUCCES:
            return {
                ...state,
                loading: false,
                auth: true,
                user: action.payload,
            };

        case AUTH_ERROR:
            return {
                ...state,
                loading: false,
                auth: false,
            };
        case LOGIN:
            return {
                ...state,
                loading: true,
                auth: false,
            };
        case LOGIN_SUCCES:
            return {
                ...state,
                loading: false,
                auth: true,
                user: action.payload,
            };
        case LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                auth: true,
                user: {},
                error: action.payload,
            };
        default:
            return state;
    }
};

export default authReducer;

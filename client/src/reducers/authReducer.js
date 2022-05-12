import { AUTH, AUTH_SUCCES, AUTH_ERROR } from "../types/authTypes";

const initialState = {
    auth: false,
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH:
            return {
                ...state,
                loading: true,
                auth: false,
                user:{}
            };

        case AUTH_SUCCES:
            return {
                ...state,
                loading: true,
                auth: true,
            };

        case AUTH_ERROR:
            return {
                ...state,
                loading: true,
                auth: false,
            };
        default:
            return state;
    }
};

export default authReducer;
import {
    GET_EMPLOYEES,
    GET_EMPLOYEES_ERROR,
    GET_EMPLOYEES_SUCCESS,
} from "../types/employees.types";

const initialState = {
    employees: [],
};

const employesReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_EMPLOYEES:
            return {
                ...state,
                loading: true,
            };
        case GET_EMPLOYEES_SUCCESS:
            return {
                ...state,
                loading: false,
                employees: action.payload,
            };
        case GET_EMPLOYEES_ERROR:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

export default employesReducers;

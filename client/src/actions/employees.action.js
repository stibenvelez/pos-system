import clienteAxios from "../config/axios";
import { GET_EMPLOYEES, GET_EMPLOYEES_ERROR, GET_EMPLOYEES_SUCCESS } from "../types/employees.types";


export const getAllEmployeesAction = () => {
    return async (dispatch) => {
        dispatch({
            type: GET_EMPLOYEES,
        });
        try {
            const res = await clienteAxios("/employees");
            dispatch({
                type: GET_EMPLOYEES_SUCCESS,
                payload: res.data,
            });
        } catch (error) {
            dispatch({
                type: GET_EMPLOYEES_ERROR,
            });
        }
    };
};

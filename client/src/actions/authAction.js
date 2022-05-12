import {
    AUTH,
    AUTH_SUCCES,
    AUTH_ERROR,
    LOGIN,
    LOGIN_SUCCES,
    LOGIN_ERROR,
} from "../types/authTypes";
import clienteAxios from "../config/axios";
import { useNavigate } from "react-router-dom";

export const AuthAction = () => {
    
    return async (dispatch) => {
        dispatch(authtentication());
        try {
            const token = localStorage.getItem("token");
        
            if (!token) {
                console.log("no hay token");
                
            }
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };
            const { data } = await clienteAxios.get("/users/profile", config);
            dispatch(authtenticationSuccess(data));
            //navigate('/dashboard')
        } catch (error) {
            dispatch(authtenticationError(error));
        }
    };
};

const authtentication = () => ({
    type: AUTH,
});

const authtenticationSuccess = (user) => ({
    type: AUTH_SUCCES,
    payload: user,
});
const authtenticationError = () => ({
    type: AUTH_ERROR,
});

export const loginAction = (user) => {
    return async (dispatch) => {
        dispatch({ type: LOGIN });
        try {
            const { data } = await clienteAxios.post("/users/login", user);
            console.log(data);
            localStorage.setItem("token", data.token);
            dispatch({ type: LOGIN_SUCCES, payload: user });
        } catch (error) {
            console.log(error.response.data.msg);
            dispatch({ type: LOGIN_ERROR, payload: error });
        }
    };
};

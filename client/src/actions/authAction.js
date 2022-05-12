import { AUTH, AUTH_SUCCES, AUTH_ERROR } from "../types/authTypes";

export const AuthAction = (user) => {
    const token = localStorage.getItem("token");
    console.log(token);
    
    if (!token) {
        console.log('no hay token')
        return;
    }

    return async (dispatch) => {
        dispatch(authtentication());

        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    AAuthorization: `Bearer ${token}`,
                },
            };
            const { data } = await clienteAxios.get("/users/profile", config);
            console.log("--->", data);
            authtenticationSuccess(user);
        } catch (error) {
            authtenticationError();
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

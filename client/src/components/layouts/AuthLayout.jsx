import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const AuthLayout = () => {
    const navigate = useNavigate();
    const loading = useSelector(({ auth }) => auth.loading);
    const auth = useSelector(({ auth }) => auth.auth);

    if (loading){ return};

    if (auth) {
        console.log('autroizado')
        return navigate("/dashboard")
    };

    return (
        <>
            <Outlet />
        </>
    );
};

export default AuthLayout;

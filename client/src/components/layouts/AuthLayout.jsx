
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {

    const loading = useSelector(({ auth }) => auth.loading);
    const auth = useSelector(({ auth }) => auth.auth);

           
    return <>{auth ? <Navigate to="/dashboard" /> : <Outlet />}</>;
};

export default AuthLayout;

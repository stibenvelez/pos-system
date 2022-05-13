
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {

    const loading = useSelector(({ auth }) => auth.loading);
    const auth = useSelector(({ auth }) => auth.auth);
       
    if (loading) {
        return;
    }
    
    return <>{!auth?<Outlet />:<Navigate to="/dashboard"/>}</>
};

export default AuthLayout;

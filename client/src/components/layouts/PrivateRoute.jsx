import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

import Navbar from "../ui/Navbar";
import Sidebar from "../ui/sidebar/SideBar";

const PrivateRoute = () => {
    const navigate = useNavigate();
    const auth = useSelector(({ auth }) => auth.auth);
    const loading = useSelector(({ auth }) => auth.loading);

    if (loading) return;

    if (!auth) {
        navigate("/");
    }

    return (
        <div className="flex w-full h-screen overflow-hidden bg-gray-50">
            <Sidebar />
            <div className="w-full h-full overflow-y-auto">
                <Navbar />
                <div className="p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default PrivateRoute;

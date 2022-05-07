import { Outlet } from "react-router-dom";
import SideBar from "./components/ui/sidebar/SideBar";

const Layout = () => {
    return (
        <div className="bg-gray-50 flex w-full h-screen">
            <SideBar />
            <div className="h-full overflow-y-auto w-full">
                <div className="bg-gray-200 h-10"></div>
                <div className="p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;

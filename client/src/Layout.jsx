import { Outlet } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import SideBar from "./components/ui/sidebar/SideBar";

const Layout = () => {
    return (
        <div className="bg-gray-50 flex w-full h-screen">
            <SideBar />
            <div className="h-full overflow-y-auto w-full">
                <Navbar/>
                <div className="p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;

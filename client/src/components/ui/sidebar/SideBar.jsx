
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData ";
import SubMenu from "./SubMenu";

import { useState } from "react";


const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div
                className="absolute z-50 flex items-center justify-center w-12 h-12 rounded-md bg-slate-800 hover:bg-slate-700 bottom-3 right-3 sm:hidden"
                onClick={showSidebar}
            >
                <Link className="text-white" to="#">
                    <FaIcons.FaBars />
                </Link>
            </div>
            <nav
                className={`bg-slate-800 h-screen sm:w-48 w-full  flex justify-center transition-all duration-75 sm:relative sm:left-0 fixed ease-out ${
                    sidebar ? "left-0" : "-left-full "
                }`}
                sidebar={sidebar}
            >
                <div className="w-full ">
                    <div className="w-full flex justify-center py-4">
                        <Link to="/">
                            <a className="text-2xl text-white font-bold">
                                LOGO
                            </a>
                        </Link>
                    </div>
                    <Link
                        className="absolute items-center justify-end text-xl font-bold text-white right-2 top-3 sm:hidden"
                        to="#"
                    >
                        <AiIcons.AiOutlineClose onClick={showSidebar} />
                    </Link>
                    {SidebarData.map((item, index) => {
                        return <SubMenu item={item} key={index} />;
                    })}
                </div>
            </nav>
        </>
    );
};

export default Sidebar;

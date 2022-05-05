
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData ";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import { useState } from "react";
/*
const Nav = styled.div`
    background: #15171c;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const SidebarNav = styled.nav`
    background: #15171c;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
    transition: 350ms;
    z-index: 10;
`;

const SidebarWrap = styled.div`
    width: 100%;
`;
*/
const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div
                className="bg-slate-800 hover:bg-slate-700 h-12 w-12 flex rounded-md justify-center items-center absolute bottom-3 right-3 sm:hidden"
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
                    <Link
                        className="right-2 top-3 text-xl font-bold absolute justify-end items-center text-white sm:hidden"
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

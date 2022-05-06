import React, { useState } from "react";
import { Link } from "react-router-dom";

/*
const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;
    &:hover {
        background: #252831;
        border-left: 4px solid #632ce4;
        cursor: pointer;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 16px;
`;

const DropdownLink = styled(Link)`
    background: #414757;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    &:hover {
        background: #632ce4;
        cursor: pointer;
    }
`;
*/
const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <Link className="flex items-center justify-between p-5 text-base text-white cursor-pointer hover:bg-slate-700 hover:border-l-4 hover:pl-4" to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <span className="ml-4">{item.title}</span>
                </div>
                <div>
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                        ? item.iconClosed
                        : null}
                </div>
            </Link>
            {subnav &&
                item.subNav.map((item, index) => {
                    return (
                        <Link className="flex items-center py-3 pl-5 text-white bg-slate-900 hover:bg-slate-600"  to={item.path} key={index}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    );
                })}
        </>
    );
};

export default SubMenu;

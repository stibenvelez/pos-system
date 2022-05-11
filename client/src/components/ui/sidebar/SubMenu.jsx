import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <NavLink
                className={` flex items-center justify-between p-5 text-base text-white cursor-pointer hover:bg-rose-700 hover:border-l-4 hover:pl-4`}
                to={item.path}
                onClick={item.subNav && showSubnav}
            >
                <div>
                    {item.icon}
                    <ion-icon name="wallet-outline"></ion-icon>
                    <span className="ml-4">{item.title}</span>
                </div>
                <div>
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                        ? item.iconClosed
                        : null}
                </div>
            </NavLink>
            {subnav &&
                item.subNav.map((item, index) => {
                    return (
                        <Link
                            className="flex items-center p-5 pl-5 text-white bg-slate-900 hover:bg-slate-600"
                            to={item.path}
                            key={index}
                        >
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    );
                })}
        </>
    );
};

export default SubMenu;

import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <div className="bg-slate-900 h-screen text-white">
            <ol>
                <li className="py-3 px-3">
                    <Link to="sales">Ventas</Link>
                </li>
                <li className="py-3 px-3">
                    <Link to="/sales/new-sale">Nueva venta</Link>
                </li>
                <li className="py-3 px-3">
                    <Link to="egresos">Egregos</Link>
                </li>
            </ol>
        </div>
    );
};

export default SideBar;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between h-10 p-2 bg-gray-200 shadow">
            <div className="flex justify-end"></div>
            <div className="flex justify-end">
                <div className="flex items-center gap-3">
                    <button className="text-sm font-medium text-gray-500 hover:text-cyan-600">
                        Perfil
                    </button>
                    <div className="flex items-center justify-center p-2 rounded-full bg-gray-50">
                        <Link to="/profile/1" className="">
                            <FontAwesomeIcon
                                icon={faUser}
                                className="text-cyan-900"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

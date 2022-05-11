import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <div className="bg-gray-200 h-10 flex justify-between items-center p-2 shadow">
            <div className="flex justify-end"></div>
            <div className="flex justify-end">
                <div className="flex items-center gap-3">
                    <button className="text-sm font-medium text-gray-500 hover:text-cyan-600">
                        Perfil
                    </button>
                    <div className="flex justify-center items-center bg-gray-50 rounded-full p-2">
                        <FontAwesomeIcon
                            icon={faUser}
                            className="text-cyan-900"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

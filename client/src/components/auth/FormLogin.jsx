import React, { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import Card from "../ui/Card/Card";
import { loginAction } from "../../actions/authAction";
import { useDispatch, useSelector } from "react-redux";

const FormLogin = () => {
    const dispatch = useDispatch();
    const [signup, setsignup] = useState({ user: "", password: "" });
    const error = useSelector(({ auth }) => auth.error);
    const handleChange = (e) => {
        setsignup({
            ...signup,
            [e.target.name]: e.target.value,
        });
    };
const loading = useSelector(({ auth }) => auth.loading);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginAction(signup));
    };

    return (
        <Card>
            <div className="flex items-center justify-center min-h-full px-6 py-6 sm:px-6 lg:px-8">
                <div className="w-full max-w-md">
                    <div>
                        <div className="flex justify-center w-full">
                            <img
                                src={`/public/assets/img/app/logo.svg`}
                                className="fill-red-500"
                                alt="React Logo"
                            />
                        </div>
                        <h2 className="text-3xl font-extrabold text-center text-gray-900 md:mx-10">
                            Iniciar Sesión
                        </h2>
                    </div>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <input
                            type="hidden"
                            name="remember"
                            defaultValue="true"
                        />
                        <div>
                            <div className="-space-y-px rounded-md shadow-sm">
                                <div>
                                    <label htmlFor="user" className="sr-only">
                                        Usuario
                                    </label>
                                    <input
                                        id="user"
                                        name="user"
                                        type="text"
                                        autoComplete="user"
                                        className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Usuario"
                                        value={signup.user}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="sr-only"
                                    >
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="password"
                                        className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Password"
                                        value={signup.password}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="pt-2">
                                <p className="text-sm text-red-600">{error}</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                                <a
                                    href="#"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <LockClosedIcon
                                        className="w-5 h-5 text-indigo-500 group-hover:text-indigo-400"
                                        aria-hidden="true"
                                    />
                                </span>
                                {loading ? 'Cargando...' : 'Sign in'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Card>
    );
};

export default FormLogin;

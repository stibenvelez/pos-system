import React, { useEffect, useState } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import Card from "../ui/Card/Card";
import { loginAction } from "../../actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [signup, setsignup] = useState({ user: "", password: "" });
    const auth = useSelector(({ auth }) => auth.auth);

    const handleChange = (e) => {
        setsignup({
            ...signup,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginAction(signup));
    };

    useEffect(() => {
        if (auth) {
            console.log("autenticado ok");
            navigate("/dashboard");
        }
    }, [auth]);

    return (
        <Card>
            {console.log("res---", auth)}
            <div className="min-h-full flex items-center justify-center py-6 px-6 sm:px-6 lg:px-8">
                <div className="max-w-md w-full">
                    <div>
                        {/* <div className="w-full flex justify-center">
                            <img
                                src={`${
                                    import.meta.env.BASE_URL
                                }img/app/logo.svg`}
                                className="fill-red-500"
                                alt="React Logo"
                            />
                        </div> */}
                        <h2 className="md:mx-10 text-center text-3xl font-extrabold text-gray-900">
                            Iniciar Sesión
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <input
                            type="hidden"
                            name="remember"
                            defaultValue="true"
                        />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="user" className="sr-only">
                                    Usuario
                                </label>
                                <input
                                    id="user"
                                    name="user"
                                    type="text"
                                    autoComplete="user"
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Usuario"
                                    value={signup.user}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="password"
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                    value={signup.password}
                                    onChange={handleChange}
                                />
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
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <LockClosedIcon
                                        className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                        aria-hidden="true"
                                    />
                                </span>
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Card>
    );
};

export default FormLogin;

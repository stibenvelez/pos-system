import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "./actions/authAction";
import Routers from "./routes";

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const auth = () => dispatch(AuthAction());
        auth();

    }, []);

    return (
        <div>
            <Routers />
        </div>
    );
};

export default App;

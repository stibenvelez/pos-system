import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "./actions/authAction";
import Routers from "./routes";

const App = () => {

    const dispatch = useDispatch();

    const loading = useSelector(({auth})=>auth.loading)
    const auth = useSelector(({auth})=>auth.loading)

    useEffect(() => {
        const auth = () => dispatch(AuthAction());
        auth();
    }, []);
    console.log("result", loading, auth);
    return (
        <div>
            <Routers />
        </div>
    );
};

export default App;

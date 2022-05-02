import React from 'react'
import ReactDOM from 'react-dom/client'
import store from "./store";
import { Provider } from "react-redux";
import Routers from './routes';
import "./index.css";

import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <Routers/>
        </Provider>
    </React.StrictMode>
);

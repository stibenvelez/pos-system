import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import HomePage from "../pages/home/HomePage";
import NewSalePage from "../pages/sales/NewSalePage";
import SalePage from "../pages/sales/SalePage";
import SalesPage from "../pages/sales/SalesPage";

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="sales">
                        <Route index element={<SalesPage />} />
                        <Route path="new-sale" element={<NewSalePage />} />
                        <Route path=":id" element={<SalePage />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;

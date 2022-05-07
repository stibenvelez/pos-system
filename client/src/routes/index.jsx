import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import HomePage from "../pages/home/HomePage";
import NewProductPage from "../pages/products/NewProductPage";
import ProductsPages from "../pages/products/ProductsPages";
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
                    <Route path="products">
                        <Route index element={<ProductsPages />} />
                        <Route path="new-product" element={<NewProductPage />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;

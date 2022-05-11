import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import HomePage from "../pages/home/HomePage";
import NewProductPage from "../pages/products/NewProductPage";
import EditProductPage from "../pages/products/EditProductPage";
import ProductsPages from "../pages/products/ProductsPages";
import NewSalePage from "../pages/sales/NewSalePage";
import SalePage from "../pages/sales/SalePage";
import SalesPage from "../pages/sales/SalesPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import EmployesPage from "../pages/employees/EmployesPage";
import SalesDetailsPage from "../pages/sales/SalesDetailsPage";

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<DashboardPage />} />
                    <Route path="sales">
                        <Route index element={<SalesPage />} />
                        <Route path="new-sale" element={<NewSalePage />} />
                        <Route path=":id" element={<SalePage />} />
                        <Route
                            path="SalesDetailsPage"
                            element={<SalesDetailsPage />}
                        />
                    </Route>
                    <Route path="products">
                        <Route index element={<ProductsPages />} />
                        <Route
                            path="new-product"
                            element={<NewProductPage />}
                        />
                        <Route
                            path="edit-product/:id"
                            element={<EditProductPage />}
                        />
                    </Route>
                    <Route path="employees">
                        <Route index element={<EmployesPage />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;

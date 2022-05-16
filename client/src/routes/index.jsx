import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewProductPage from "../pages/products/NewProductPage";
import EditProductPage from "../pages/products/EditProductPage";
import ProductsPages from "../pages/products/ProductsPages";
import NewSalePage from "../pages/sales/NewSalePage";
import SalePage from "../pages/sales/SalePage";
import SalesPage from "../pages/sales/SalesPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import EmployesPage from "../pages/employees/EmployesPage";
import SalesDetailsPage from "../pages/sales/SalesDetailsPage";
import LoginPage from "../pages/login/LoginPage";
import NotFountPage from "../pages/notFountPage/NotFountPage";
import ProfilePage from "../pages/profile/ProfilePage";
import AuthLayout from "../components/layouts/AuthLayout";
import PrivateRoute from "../components/layouts/PrivateRoute";
import SalesReportPage from "../pages/Reports/SalesReportPage";
import ProductPage from "../pages/products/ProductPage";

const Routers = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthLayout />}>
                    <Route index element={<LoginPage />} />
                    <Route path="*" element={<NotFountPage />} />
                </Route>

                <Route path="/dashboard/" element={<PrivateRoute />}>
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
                        <Route path=":id" element={<ProductPage />} />
                        <Route
                            path="edit-product/:id"
                            element={<EditProductPage />}
                        />
                    </Route>
                    <Route path="employees">
                        <Route index element={<EmployesPage />} />
                    </Route>
                    <Route path="reports">
                        <Route
                            path="sales-report"
                            index
                            element={<SalesReportPage />}
                        />
                    </Route>
                    <Route path="profile">
                        <Route path=":id" index element={<ProfilePage />} />
                    </Route>
                    <Route path="*" element={<NotFountPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;

import React, { useEffect } from "react";
import SalesList from "../../components/sales/SalesList";
import { useDispatch, useSelector } from "react-redux";
import { getAllSalesAction } from "../../actions/saleActions";

const SalesPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const allSales = () => dispatch(getAllSalesAction());
        allSales();
    }, []);

    return (
        <div className="container mx-auto ">
            <div className="pb-3">
                <h1 className="text-3xl font-bold text-slate-800">Ventas</h1>
                <p className="text-gray-800">
                    Aqui encontrara el listado de todas las ventas realizadas
                </p>
            </div>
            <div>
                <SalesList />
            </div>
        </div>
    );
};

export default SalesPage;

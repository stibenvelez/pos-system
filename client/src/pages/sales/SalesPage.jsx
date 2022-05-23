import React, { useEffect } from "react";
import SalesList from "../../components/sales/SalesList";
import { useDispatch, useSelector } from "react-redux";
import { getAllSalesAction } from "../../actions/saleActions";

import FilterOptions from "../../components/sales/FilterOptions";

const SalesPage = () => {
    const dispatch = useDispatch();
    const filters = useSelector(({ sales }) => sales.filters);

    useEffect(() => {
        (()=>dispatch(getAllSalesAction(filters)))()
    }, [filters]);

    return (
        <div className="container mx-auto ">
            <div className="flex flex-col gap-4">
                <div className="">
                    <h1 className="text-3xl font-bold text-slate-800">
                        Ventas
                    </h1>
                    <p className="text-gray-800">
                        Aqui encontrara el listado de todas las ventas
                        realizadas
                    </p>
                </div>
                <div>
                    <FilterOptions />
                </div>
                <div>
                    <SalesList />
                </div>
            </div>
        </div>
    );
};

export default SalesPage;

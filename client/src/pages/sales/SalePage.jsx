import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSaleByIdAction } from "../../actions/saleActions";
import { getSaleDetailByIdSaleAction } from "../../actions/salesDetailsAction";
import SaleComponent from "../../components/sales/sale/SaleComponent";

const SalePage = () => {
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        const getSale = () => dispatch(getSaleByIdAction(params.id));
        getSale();
    }, []);

    useEffect(() => {
        const getSalesDales = () =>
            dispatch(getSaleDetailByIdSaleAction(params.id));
        getSalesDales();
    }, []);

    return (
        <div className="container mx-auto max-w-4xl">
            <SaleComponent />
        </div>
    );
};

export default SalePage;

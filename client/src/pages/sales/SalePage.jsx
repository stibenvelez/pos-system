import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { getSaleByIdAction } from "../../actions/saleActions";
import { getSaleDetailByIdSaleAction } from "../../actions/salesDetailsAction";
import SaleComponent from "../../components/sales/sale/SaleComponent";
import { useNavigate } from "react-router-dom";

const SalePage = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        (() => dispatch(getSaleByIdAction(params.id)))();
    }, []);

    useEffect(() => {
        (() => dispatch(getSaleDetailByIdSaleAction(params.id)))();
    }, []);

    return (
        <div className="container max-w-4xl mx-auto">
            <div className="py-4">
                <button
                    onClick={() => navigate(-1)}
                    className="px-3 py-1 text-white transition duration-200 ease-in-out bg-gray-600 rounded hover:bg-gray-400"
                >
                    Volver
                </button>
            </div>
            <SaleComponent />
        </div>
    );
};

export default SalePage;

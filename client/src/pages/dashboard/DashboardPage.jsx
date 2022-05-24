import React, { useEffect } from "react";
import IndicatorsCards from "../../components/dashboard/IndicatorsCards";

const DashboardPage = () => {
    return (
        <div className="container mx-auto">
            <div className="pb-3">
                <h1 className="text-3xl font-bold text-slate-800">Dashboard</h1>
                <p className="text-gray-800">
                    Principales indicadores de su empresa
                </p>
            </div>
            <div className="grid lg:grid-cols-12 grid-cols-1 gap-4">
                <div className="lg:col-span-10">
                    <IndicatorsCards />
                </div>
                <div className="bg-gray-100 lg:col-span-2 shadow rounded-md p-4">
                    <h3>Registros</h3>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;

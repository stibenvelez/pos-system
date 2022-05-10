import React from 'react'
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
          <div className="grid grid-cols-12 h-screen gap-4">
              <div className="col-span-10">
                  <IndicatorsCards />
              </div>
              <div className="bg-gray-200 h-full col-span-2 shadow rounded-md"></div>
          </div>
      </div>
  );
}

export default DashboardPage
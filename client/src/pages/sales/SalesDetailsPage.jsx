import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getAllSalesDetailsAction } from '../../actions/salesDetailsAction';
import FilterOptions from '../../components/sales/salesDetails/FilterOptions';
import SalesDetailsList from '../../components/sales/salesDetails/SalesDetailsList';

const SalesDetailsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getAllSalesDetails = () => dispatch(getAllSalesDetailsAction());
    getAllSalesDetails()
  }, [])
  
  return (
      <div className="container mx-auto ">
          <div className="flex flex-col gap-4">
              <div className="">
                  <h1 className="text-3xl font-bold text-slate-800">Detalle de Ventas</h1>
                  <p className="text-gray-800">
                      Este es el detale de cada una de las ventas realizadas
                  </p>
              </div>
              <div>
                  <FilterOptions />
              </div>
              <div>
                  <SalesDetailsList />
              </div>
          </div>
      </div>
  );
}

export default SalesDetailsPage;
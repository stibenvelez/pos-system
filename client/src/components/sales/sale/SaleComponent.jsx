import React from "react";
import { useSelector } from "react-redux";
import formatMoney from "../../../helpers/formatMoney";
import Card from "../../ui/Card/Card";
import Spinner from "../../ui/Spinners/Spinner";
import ItemSaleDetail from "./ItemSaleDetail";
import formatData from '../../../helpers/FormatFecha'


const SaleComponent = () => {
    const sale = useSelector(({ sales }) => sales.sale);
    const salesDetails = useSelector(
        ({ salesDetails }) => salesDetails.salesDetails
    );
    const loading = useSelector(({ sales }) => sales.loading);
    const { id } = sale;
    
    if (loading)
        return (
            <Card>
                <div className="container flex items-center justify-center w-full max-w-4xl py-20 mx-auto">
                    <Spinner />
                </div>
            </Card>
        );

    return (
        <Card>
            <div className="p-3">
                <div>

                    <h3 className="text-2xl font-semibold uppercase">
                        Venta Nº {id}
                    </h3>
                </div>
                <div className="flex items-end gap-3 py-2">
                    <div>
                        <p>Documento: {sale.document}</p>
                    </div>
                    <div>
                        <p>fecha: {formatData(sale.date)}</p>
                    </div>
                </div>
                <div>
                    <table className="w-full overflow-hidden text-sm text-left text-gray-500 rounded-md dark:text-gray-400">
                        <thead className="text-xs text-gray-800 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    product
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    quantity
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    unitPrice
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    totalPrice
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    brand
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    name
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {salesDetails.map((saleDetail) => (
                                <ItemSaleDetail
                                    saleDetail={saleDetail}
                                    key={saleDetail.idSaleDetail}
                                />
                            ))}
                        </tbody>
                    </table>
                    <div className="flex items-end gap-3 py-4 text-gray-800">
                        Valor total:{" "}
                        <p className="text-2xl font-bold">
                            {formatMoney.format(sale.totalSale)}
                        </p>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default SaleComponent;

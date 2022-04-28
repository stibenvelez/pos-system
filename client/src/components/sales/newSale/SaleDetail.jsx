import React from "react";
import Card from "../../ui/Card/Card";

import ItemSailDetail from "./ItemSailDetail";

const SaleDetail = ({ detailSale, fullSalePrice }) => {
    return (
        <Card>
            <div className="relative overflow-x-auto  sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="bg-gray-50">
                        <tr className="capitalize  text-gray-800">
                            <th scope="col" className="py-3 px-6">
                                Producto
                            </th>
                            <th scope="col" className="py-3 px-6">
                                cantidad
                            </th>
                            <th scope="col" className="py-3 px-6">
                                valor unit
                            </th>
                            <th scope="col" className="py-3 px-6">
                                valor total
                            </th>
                            <th scope="col" className="py-3 px-6">
                                acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {detailSale.map((detail, index) => (
                            <ItemSailDetail detail={detail} key={index} />
                        ))}
                    </tbody>
                    <tfoot>
                        <tr className="text-gray-700 border-b">
                            <td className="py-3 px-6 text-xl">Total:</td>
                            <td className="py-3 px-6 text-xl font-semibold">
                                {fullSalePrice}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </Card>
    );
};

export default SaleDetail;

import {useEffect} from "react";
import Card from "../../ui/Card/Card";

import ItemSailDetail from "./ItemSailDetail";

// Redux
import { useSelector } from "react-redux";
import formatMoney from "../../../helpers/formatMoney";

const SaleDetail = () => {
    const sailDetails = useSelector(({ sales }) => sales.detail);
   
    return (
        <Card>
            <div className="relative overflow-x-auto sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="bg-gray-50">
                        <tr className="text-gray-800 capitalize">
                            <th scope="col" className="px-6 py-3">
                                Producto
                            </th>
                            <th scope="col" className="px-6 py-3">
                                cantidad
                            </th>
                            <th scope="col" className="px-6 py-3">
                                valor unit
                            </th>
                            <th scope="col" className="px-6 py-3">
                                valor total
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Comision
                            </th>
                            <th scope="col" className="px-6 py-3">
                                acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {sailDetails.map((detail, index) => (
                            <ItemSailDetail detail={detail} key={index} />
                        ))}
                    </tbody>
                    <tfoot>
                        <tr className="text-gray-700 border-b">
                            <td className="px-6 py-3 text-xl">Total:</td>
                            <td className="px-6 py-3 text-xl font-semibold">
                                {formatMoney.format(sailDetails.reduce((acc,value)=>acc+value.totalPrice, 0))}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </Card>
    );
};

export default SaleDetail;

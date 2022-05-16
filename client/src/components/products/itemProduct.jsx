import { Link } from "react-router-dom";
import formatDate from "../../helpers/FormatFecha";
import formatMoney from "../../helpers/formatMoney";

const ItemProduct = ({ productData }) => {
    const {
        idProduct,
        product,
        idProductCategory,
        unitPrice,
        unitCost,
        category,
        commissionPercentage,
        commissionValue,
        idState
    } = productData;

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
                scope="row"
                className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
                {product}
            </th>
            <td className="px-6 py-2 font-semibold">{category}</td>
            <td className="px-6 py-2">{formatMoney.format(unitCost)}</td>
            <td className="px-6 py-2">{formatMoney.format(unitPrice)}</td>
            <td className="px-6 py-2">{commissionPercentage}%</td>
            <td>
                <div className="flex items-center py-2 ">
                    <Link
                        to={`${idProduct}`}
                        className="items-center px-2 py-1 text-white transition duration-200 ease-in-out bg-gray-400 rounded-l hover:bg-gray-600"
                    >
                        ver
                    </Link>
                    <Link
                        to={`edit-product/${idProduct}`}
                        className="items-center px-2 py-1 text-white transition duration-200 ease-in-out bg-gray-400 hover:bg-blue-800"
                    >
                        Editar
                    </Link>
                    <button className="items-center px-2 py-1 text-white transition duration-200 ease-in-out bg-gray-400 rounded-r hover:bg-red-500">
                        Anular
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default ItemProduct;

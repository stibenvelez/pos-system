import { Link } from 'react-router-dom';
import formatDate from '../../helpers/FormatFecha';
import formatMoney from '../../helpers/formatMoney';



const SaleItem = ({sale}) => {
    const { id, document, date, totalPrice } = sale;

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th className="px-6 py-4">{id}</th>
            <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
                {document}
            </th>
            <td className="px-6 py-4 font-semibold">
                {formatMoney.format(totalPrice)}
            </td>
            <td className="px-6 py-4">{date}</td>
            <div className="flex items-center py-4 ">
                <Link
                    to={`${id}`}
                    className="items-center px-2 py-1 text-white transition duration-200 ease-in-out bg-gray-400 rounded-l hover:bg-gray-600"
                >
                    ver
                </Link>
                <button className="items-center px-2 py-1 text-white transition duration-200 ease-in-out bg-gray-400 hover:bg-blue-800">
                    Editar
                </button>
                <button className="items-center px-2 py-1 text-white transition duration-200 ease-in-out bg-gray-400 rounded-r hover:bg-red-500">
                    Anular
                </button>
            </div>
        </tr>
    );
};

export default SaleItem;
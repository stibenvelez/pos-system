import formatDate from '../../helpers/FormatFecha';
import formatMoney from '../../helpers/formatMoney';



const SaleItem = ({sale}) => {
    const { id, document, date, totalPrice } = sale;

    return (
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th class="px-6 py-4">{id}</th>
            <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
                {document}
            </th>
            <td class="px-6 py-4 font-semibold">
                {formatMoney.format(totalPrice)}
            </td>
            <td class="px-6 py-4">{date}</td>
            <div className="flex items-center py-4  ">
                <button className="bg-gray-400 transition duration-200 ease-in-out hover:bg-gray-600 px-2 py-1 rounded-l text-white items-center">
                    ver
                </button>
                <button className="bg-gray-400 transition duration-200 ease-in-out hover:bg-blue-800 px-2 py-1 text-white items-center">
                    Editar
                </button>
                <button className="bg-gray-400 transition duration-200 ease-in-out hover:bg-red-500 px-2 py-1 rounded-r text-white items-center">
                    Anular
                </button>
            </div>
        </tr>
    );
};

export default SaleItem;
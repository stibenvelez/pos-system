import React from 'react'

const SaleItem = ({sale}) => {
    const { id, document, date } = sale;

    return (
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th class="px-6 py-4">{id}</th>
            <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
                {document}
            </th>
            <td class="px-6 py-4">{date}</td>
            <div className="flex gap-3">
                <button>ver</button>
                <button>Editar</button>
                <button>Anular</button>
            </div>
        </tr>
    );
};

export default SaleItem;
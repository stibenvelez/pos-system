import React from 'react'
import {formatDate} from '../../helpers/FormatDate'
const ItemReport = ({ report }) => {
    const { product, quantity, totalPrice, commissionValue, createAt } = report;
  return (
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
           <td class="px-4 py-3">{product}</td>
           <td class="px-4 py-3">{quantity}</td>
           <td class="px-4 py-3">{totalPrice}</td>
           <td class="px-4 py-3">{commissionValue}</td>
           <td class="px-4 py-3">{formatDate(createAt)}</td>
      </tr>
  );
}

export default ItemReport
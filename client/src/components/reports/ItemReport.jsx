import React from 'react'
import {formatDate} from '../../helpers/FormatDate'
import formatMoney from '../../helpers/formatMoney';
const ItemReport = ({ report }) => {
    const {
        product,
        quantity,
        totalPrice,
        commissionValue,
        createdAt,
        employeName,
    } = report;
  return (
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td class="px-4 py-3 font-medium">{product}</td>
          <td class="px-4 py-3">{quantity}</td>
          <td class="px-4 py-3">{formatMoney.format(totalPrice)}</td>
          <td class="px-4 py-3">{employeName}</td>
          <td class="px-4 py-3">{formatMoney.format(commissionValue)}</td>
          <td class="px-4 py-3">{formatDate(createdAt)}</td>
      </tr>
  );
}

export default ItemReport
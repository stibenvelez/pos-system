import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ItemSailDetail = ({ detail}) => {

    return (
        <tr className="text-gray-700 border-b hover:bg-gray-50">
            <td className="py-3 px-6">{detail.product}</td>
            <td className="py-3 px-6">{detail.quantity}</td>
            <td className="py-3 px-6">{detail.unitPrice}</td>
            <td className="py-3 px-6">{detail.totalPrice}</td>
            <td className="py-3 px-6">
                <button type="button" className="p-2 btn btn-sm btn-danger">
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </td>
        </tr>
    );
};

export default ItemSailDetail;
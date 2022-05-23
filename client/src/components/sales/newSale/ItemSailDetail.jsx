import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

// Redux
import { useDispatch } from "react-redux";
import { removeItemFromSaleDetailAction } from "../../../actions/saleActions";

const ItemSailDetail = ({ detail }) => {
    const dispatch = useDispatch();

    const handleRemoveItem = (item) => {
        dispatch(removeItemFromSaleDetailAction(item.id));
    };

    return (
        <tr className="text-gray-700 border-b hover:bg-gray-50 hover:shadow-md">
            <td className="px-6 py-3 capitalize">{detail.productName}</td>
            <td className="px-6 py-3">{detail.quantity}</td>
            <td className="px-6 py-3">{detail.unitPrice}</td>
            <td className="px-6 py-3">{detail.totalPrice}</td>
            <td className="px-6 py-3">{detail.commissionValue}</td>
            <td className="px-6 py-3">
                <button
                    type="button"
                    className="p-2 transition hover:text-red-600 transition-duration: 150ms "
                    onClick={() => handleRemoveItem(detail)}
                >
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </td>
        </tr>
    );
};

export default ItemSailDetail;

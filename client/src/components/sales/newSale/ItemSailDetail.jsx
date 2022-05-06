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
            <td className="py-3 px-6">{detail.productName}</td>
            <td className="py-3 px-6">{detail.quantity}</td>
            <td className="py-3 px-6">{detail.unitPrice}</td>
            <td className="py-3 px-6">{detail.totalPrice}</td>
            <td className="py-3 px-6">
                <button
                    type="button"
                    className="p-2 hover:text-red-600 transition transition-duration: 150ms "
                    onClick={() => handleRemoveItem(detail)}
                >
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </td>
        </tr>
    );
};

export default ItemSailDetail;

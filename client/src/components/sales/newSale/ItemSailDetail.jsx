import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

// Redux
import { useDispatch } from 'react-redux';
import { removeItemFromSaleDetailAction } from '../../../actions/saleActions';

const ItemSailDetail = ({ detail }) => {
    const dispatch = useDispatch()

    const removeItemFromSaleDetail = (item) =>
        dispatch(removeItemFromSaleDetailAction(item));
    
    const handleRemoveItem = (item) => {
  
         var opcion = confirm("Deseas eliminar el producto?");
         if (opcion == true) {
            removeItemFromSaleDetail(item.id);
         } 
        
        
    }

    return (
        <tr className="text-gray-700 border-b hover:bg-gray-50">
            <td className="py-3 px-6">{detail.product}</td>
            <td className="py-3 px-6">{detail.quantity}</td>
            <td className="py-3 px-6">{detail.unitPrice}</td>
            <td className="py-3 px-6">{detail.totalPrice}</td>
            <td className="py-3 px-6">
                <button
                    type="button"
                    className="p-2 btn btn-sm btn-danger"
                    onClick={() => handleRemoveItem(detail)}
                >
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </td>
        </tr>
    );
};

export default ItemSailDetail;
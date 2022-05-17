import { disableProductById, productById } from "./productDAL.js";

export const AddnewProducService = (data) => {};

export const editProductByIdService = async (data) => {
    data.product = data.product.toLocaleLowerCase();
    const idProduct = data.idProduct;

    return await productById(idProduct);
};

export const disableProductByIdService = async (id) => {

    const [rows] = await productById(id);
    const currentState = rows[0].idState
    console.log(currentState);
    const newState = {
        id,
        state: currentState===1?2:1,
    };

    if (rows.length === 0) {
        throw "No existe el producto";
    }

    const [result] = await disableProductById(newState);
    return result;
};

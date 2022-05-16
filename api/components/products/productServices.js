import { productById } from "./productDAL.js";

export const AddnewProducService = data => {
    
}

export const editProductByIdService = async (data) => {
    data.product = data.product.toLocaleLowerCase();
    const idProduct = data.idProduct;

    return await productById(idProduct);

    
};
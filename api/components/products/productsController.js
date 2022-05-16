    import {
    allProducts,
    insertProduct,
    productById,
    editProduct,
} from "./productDAL.js";
import { editProductByIdService } from "./productServices.js";

export const getAllProducts = async (req, res) => {
    console.log(req.query);
    try {
        const [rows] = await allProducts(req.query);
        res.json(rows);
    } catch (error) {
        console.log(error)
        res.status(400).json({ msg: "hubo un error" });
    }
};

export const getProductById = async (req, res) => {

    try {
        const [rows] = await productById(req.params.id);
        res.json(rows);
    } catch (error) {
        console.log(error)
        res.status(400).json({ msg: "hubo un error" });
    }
};

export const AddnewProduct = async (req, res) => {

    try {
        const [rows] = await insertProduct(req.body);
        res.json(rows);
    } catch (error) {
        console.log(error)
        res.status(400).json({ msg: "hubo un error" });
    }
};
export const editProductById = async (req, res) => {

    try {
        const product = await editProductByIdService(req.body);

        if (!product.length) {
            res.status(400).json({ msg: "No se encontro el producto" });
            return
        }        

        const [rows] = await editProduct(req.body);
        res.json(rows);
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: "hubo un error" });
    }
};

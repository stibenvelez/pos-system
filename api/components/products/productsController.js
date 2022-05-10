import { allProducts, insertProduct, productById } from "./productService.js";

export const getAllProducts = async (req, res) => {
    try {
        const [rows] = await allProducts();
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

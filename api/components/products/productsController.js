import {
    allProducts,
    insertProduct,
    productById,
    editProduct,
} from "./productService.js";

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
export const editProductById = async (req, res) => {
    const idProduct = req.body.idProduct;
    try {
        const [product] = await productById(idProduct);
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

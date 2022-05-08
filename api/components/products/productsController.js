import { allProducts, productById } from "./productService.js";

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
    console.log(req.params.id);
    try {
        const [rows] = await productById(req.params.id);
        res.json(rows);
    } catch (error) {
        console.log(error)
        res.status(400).json({ msg: "hubo un error" });
    }
};

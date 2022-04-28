import { allProducts } from "./productService.js";

export const getAllProducts = async (req, res) => {
    try {
        const [rows] = await allProducts();
        res.json(rows);
    } catch (error) {
        console.log(error)
        res.status(400).json({ msg: "hubo un error" });
    }
};

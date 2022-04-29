
import { allSales } from "./saleServices.js";

export const getAllSales = async (req, res) => {
    try {
        const [rows] = await allSales();
        res.json(rows);
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: "hubo un error" });
    }
};


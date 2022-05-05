import { allSales, insertNewSale } from "./saleServices.js";

export const getAllSales = async (req, res) => {

    try {
        const [rows] = await allSales(req.query);
        res.json(rows);
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: "hubo un error" });
    }
};

export const createNewSale = async (req, res) => {
    try {
        await insertNewSale(req.body);
        res.json({ msg: '¡Ingreso registrado con exito!' });
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: "Hubo un error registrando el ingreso"});
    }
};

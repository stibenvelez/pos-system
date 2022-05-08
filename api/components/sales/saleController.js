import { allSales, insertNewSale, SaleById } from "./saleServices.js";

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
    console.log(req.body);
    try {
        await insertNewSale(req.body);
        res.json({ msg: "¡Ingreso registrado con exito!" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: "Hubo un error registrando el ingreso" });
    }
};

export const getSaleById = async (req, res) => {
    try {
        const [rows] = await SaleById(req.params.id);
        res.json(rows[0]);
    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg: "Hubo un error buscando la vent apor id",
        });
    }
};

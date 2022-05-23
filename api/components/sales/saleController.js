import { SaleById } from "./saleDAL.js";
import { newSaleService, cancelSaleByIdService, getAllSalesServices } from "./saleServices.js";

export const getAllSales = async (req, res) => {
    try {
        const rows = await getAllSalesServices(req.query);
        res.json(rows); 
    } catch (error) {
        res.status(404).json({ msg: error.message });
    }
};

export const createNewSale = async (req, res) => {
    try {
        await newSaleService(req.body);
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

export const cancelSaleById = async (req, res) => {
    try {
        await cancelSaleByIdService(req.body);
        res.json('cancelado');
    } catch (error) {
        console.log(error)
    }
};

import express from "express";
const router = express.Router();
import {
    cancelSaleById,
    createNewSale,
    getAllSales,
    getSaleById
} from "./saleController.js";


router.get("/", getAllSales);
router.get("/:id", getSaleById);
router.post("/", createNewSale);
router.put("/cancel-sale", cancelSaleById);
export default router;

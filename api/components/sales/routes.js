import express from "express";
const router = express.Router();
import {
    createNewSale,
    getAllSales,
    getSaleById
} from "./saleController.js";


router.get("/", getAllSales);
router.get("/:id", getSaleById);
router.post("/", createNewSale);

export default router;

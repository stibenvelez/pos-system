import express from "express";
import {createNewSale, getAllSales, getSaleById} from './saleController.js'
const router = express.Router();

router.get("/", getAllSales);
router.get("/:id", getSaleById);
router.post("/", createNewSale);

export default router;

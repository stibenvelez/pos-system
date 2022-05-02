import express from "express";
import {createNewSale, getAllSales} from './saleController.js'
const router = express.Router();

router.get("/", getAllSales);
router.post("/", createNewSale);

export default router;

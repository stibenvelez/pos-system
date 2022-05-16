import express from "express";
import { getAllSalesReport } from "./saleReportController.js";
const router = express.Router();

router.get("/", getAllSalesReport);

export default router;
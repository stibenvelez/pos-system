import express from "express";
import {
    getAllSaleDetails,
    getSailDetailByIdSale,
} from "./salesDetailsController.js";
const router = express.Router();


router.get("/", getAllSaleDetails);
router.get("/search-by-idsale/:id", getSailDetailByIdSale);

export default router
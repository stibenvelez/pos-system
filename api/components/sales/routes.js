import express from "express";
import {getAllSales} from './saleController.js'
const router = express.Router();

router.get("/", getAllSales);
router.post("/", (req, res)=>console.log(req.bodyclear));

export default router;

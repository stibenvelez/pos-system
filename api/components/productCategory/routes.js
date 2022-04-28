import express from "express";
const router = express.Router();

import {getAllCategoryProducts} from './productController.js'

router.get("/", getAllCategoryProducts);


export default router;
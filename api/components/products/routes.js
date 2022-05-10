import express from 'express'
import { AddnewProduct, getAllProducts, getProductById } from './productsController.js'
const router = express.Router()

router.get('/', getAllProducts)
router.get("/:id", getProductById);
router.post("/", AddnewProduct);

export default router;


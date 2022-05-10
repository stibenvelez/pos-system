import express from 'express'
import {
    AddnewProduct,
    getAllProducts,
    getProductById,
    editProductById,
} from "./productsController.js";
const router = express.Router()

router.get('/', getAllProducts)
router.get("/:id", getProductById);
router.post("/", AddnewProduct);
router.put("/:id", editProductById);

export default router;


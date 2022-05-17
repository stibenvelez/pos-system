import express from 'express'
import {
    AddnewProduct,
    getAllProducts,
    getProductById,
    editProductById,
    disableProductById,
} from "./productsController.js";
const router = express.Router()

router.get('/', getAllProducts)
router.get("/:id", getProductById);
router.post("/", AddnewProduct);
router.put("/:id", editProductById);
router.put("/disable/:id", disableProductById);

export default router;


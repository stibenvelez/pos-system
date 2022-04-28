import express from 'express'
import { getAllProducts } from './productsController.js'
const router = express.Router()

router.get('/', getAllProducts)

export default router;


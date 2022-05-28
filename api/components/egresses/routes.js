import express from 'express'
import {
    addNewEgress,
    getAllEgresses,
    getAllEgressesCategories,
    getAllEgressesSubcategories,
} from "./egresses.controller.js";

const router = express.Router()

router.get("/", getAllEgresses);
router.post("/", addNewEgress);

router.get("/categories", getAllEgressesCategories);
router.get("/subcategories", getAllEgressesSubcategories);

export default router
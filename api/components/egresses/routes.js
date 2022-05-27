import express from 'express'
import {
    addNewEgress,
    getAllEgresses,
    getAllEgressesCategories,
} from "./egresses.controller.js";

const router = express.Router()

router.get("/", getAllEgresses);
router.post("/", addNewEgress);

router.get("/categories", getAllEgressesCategories);

export default router
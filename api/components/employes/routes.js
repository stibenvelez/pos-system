import express from "express";
import { getAllEmployees, getEmployeById } from "./employeController.js";
const router = express.Router();



router.get("/", getAllEmployees);
router.get("/:id", getEmployeById);

export default router;

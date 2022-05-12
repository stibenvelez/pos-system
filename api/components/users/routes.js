const router = express.Router();
import express from "express";
import { getAllUsers, createNewUser, auth, forgetPassword, getUser } from "./userController.js";
import checkAuth from '../../middleware/checkAuth.js'

router.get("/", getAllUsers);
router.post("/", createNewUser);
router.post("/login", auth);
router.post("/forget-password", forgetPassword);
router.get("/profile", checkAuth, getUser);

export default router
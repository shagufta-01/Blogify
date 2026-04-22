import express from "express";
import { registerUser } from "../controller/user.controller.js";
import { loginUser } from "../controller/user.controller.js";
import { logoutUser } from "../controller/user.controller.js";
import { isAuthenticated } from "../middleware/authUser.js";

const router = express.Router();
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout",isAuthenticated,logoutUser)
export default router;

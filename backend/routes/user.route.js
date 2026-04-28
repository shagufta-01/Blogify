import express from "express";
import { registerUser,myProfile,getAdmin } from "../controller/user.controller.js";
import { loginUser } from "../controller/user.controller.js";
import { logoutUser } from "../controller/user.controller.js";
import { isAuthenticated } from "../middleware/authUser.js";

const router = express.Router();
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout",isAuthenticated,logoutUser)
router.get("/me",isAuthenticated,myProfile)
router.get("/admin",getAdmin)
export default router;

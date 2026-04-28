import express from "express";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getSingleBlog,
  myBlogs,
  updateBlog,
} from "../controller/blog.controller.js";
import { isAuthenticated, authorizeRoles } from "../middleware/authUser.js";

const router = express.Router();
router.post("/create", isAuthenticated, authorizeRoles("admin"), createBlog);
router.delete(
  "/delete/:id",
  isAuthenticated,
  authorizeRoles("admin"),
  deleteBlog,
);
router.get("/allBlogs", isAuthenticated, getAllBlogs);

router.get("/singleBlog/:id", isAuthenticated, getSingleBlog);
router.get("/myBlogs/:id", isAuthenticated, myBlogs);
router.get("/update/:id",isAuthenticated,authorizeRoles("admin"),updateBlog);
export default router;
// /api/blog/create

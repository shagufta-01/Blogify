
import { v2 as cloudinary } from "cloudinary";
import Blog from "../modals/blog.modal.js";
export const createBlog = async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({
        message: "Blog Image is required",
      });
    }

    const { blogImage } = req.files;

    const allowedFormats = ["image/jpeg", "image/png", "image/webp"];
    if (!allowedFormats.includes(blogImage.mimetype)) {
      return res.status(400).json({
        message: "Only jpeg, png and webp formats are allowed",
      });
    }

    const { title, category, about } = req.body || {};

    if (!title || !category || !about) {
      return res.status(400).json({
        message: "Please fill all the fields",
      });
    }
    const adminName = req?.user?.name || "Admin";
    const adminPhoto =
      req?.user?.photo?.url ||
      "https://res.cloudinary.com/dzcmadjl1/image/upload/v1700000000/default-avatar.png";
    const createdBy = req?.user?._id;

    const cloudinaryResponse = await cloudinary.uploader.upload(
      blogImage.tempFilePath,
    );

    if (!cloudinaryResponse || cloudinaryResponse.error) {
      console.log(cloudinaryResponse?.error);
      return res.status(500).json({
        message: "Image upload failed",
      });
    }
    const blogData = {
      title,
      about,
      category,
      adminName,
      adminPhoto,
      createdBy,
      blogImage: {
        public_id: cloudinaryResponse.public_id,
        url: cloudinaryResponse.secure_url,
      },
    };
    const blogs = await Blog.create(blogData);

    if (blogs) {
      return res.status(201).json({
        message: "Blog created successfully",
        blogs,
      });
    }
  } catch (error) {
    console.log("Register Error:", error.message);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};


// /create
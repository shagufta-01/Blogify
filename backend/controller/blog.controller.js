import { v2 as cloudinary } from "cloudinary";
import Blog from "../modals/blog.modal.js";
import mongoose from "mongoose";

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
    const adminName = req?.user?.name;
    const adminPhoto =req?.user?.photo?.url
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

//  deleteBlog
export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }
    await blog.deleteOne();
    return res.status(200).json({
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.log("Delete Blog Error:", error.message);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    return res.status(200).json({
      message: "Blogs fetched successfully",
      blogs,
    });
  } catch (error) {
    console.log("Get All Blogs Error:", error.message);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const getSingleBlog = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid blog id",
      });
    }
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    return res.status(200).json({
      message: "Blog fetched successfully",
      blog,
    });
  } catch (error) {
    console.log("Get Single Blog Error:", error.message);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const myBlogs = async(req,res)=>{
  try{
const userId = req.user._id;
const blogs = await Blog.find({userId});
return res.status(200).json({blogs})
  }
  catch(error){
    console.log("Get My Blogs Error:", error.message);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
}

export const updateBlog = async(req,res)=>{
  const {id} = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({member:"Invalid blog id"})
  }
  const updatemyBlog = await Blog.findByIdAndUpdate(id,req.body,{new:true})
  if(!updatemyBlog){
    return res.status(404).json({mesage:"Blog is not found"})
  }
  return res.status(200).json({message:"Blog updated successfully",updatemyBlog})
}
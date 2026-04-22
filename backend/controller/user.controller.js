import User from "../modals/user.modal.js";
import bcrypt from "bcryptjs";
import { v2 as cloudinary } from "cloudinary";
import createTokenAndSaveCookie from "../jwt/authToken.js";
export const registerUser = async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({
        message: "No file uploaded",
      });
    }

    const { photo } = req.files;

    const allowedFormats = ["image/jpeg", "image/png", "image/webp"];
    if (!allowedFormats.includes(photo.mimetype)) {
      return res.status(400).json({
        message: "Only jpeg, png and webp formats are allowed",
      });
    }

    const { name, email, password, phone, education, role } = req.body || {};

    if (!name || !email || !password || !phone || !education || !role) {
      return res.status(400).json({
        message: "Please fill all the fields",
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const cloudinaryResponse = await cloudinary.uploader.upload(
      photo.tempFilePath,
    );

    if (!cloudinaryResponse || cloudinaryResponse.error) {
      console.log(cloudinaryResponse?.error);
      return res.status(500).json({
        message: "Image upload failed",
      });
    }
const hashpassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashpassword,
      phone,
      education,
      role,
      photo: {
        public_id: cloudinaryResponse.public_id,
        url: cloudinaryResponse.secure_url,
      },
    });

    await newUser.save();
if(newUser){
  const token = await createTokenAndSaveCookie(newUser._id, res);
    return res.status(201).json({
      message: "User registered successfully", newUser, token:token
    });
}
  
  } catch (error) {
    console.log("Register Error:", error.message);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const loginUser = async (req, res) => {
  const { email, password, role } = req.body || {};

  try {
    console.log("req.body from login user:", req.body);

    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Please fill all the fields",
      });
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    if (!user.password) {
      return res.status(400).json({
        message: "User password is missing",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    if (user.role !== role) {
      return res.status(400).json({
        message: `Given role ${role} does not match with user role ${user.role}`,
      });
    }

    const token = await createTokenAndSaveCookie(user._id, res);

    return res.status(200).json({
      message: "User logged in successfully",
      user,
      token,
    });
  } catch (error) {
    console.log("Login Error:", error.message);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const logoutUser = async(req,res)=>{
  try{
res.clearCookie("jwt", {httpOnly: true, });
return res.status(200).json({
  message:"User logged out successfully"
})

  }catch(error){
    console.log("Logout Error:", error.message);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
}
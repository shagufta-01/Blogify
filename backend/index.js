import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import { v2 as cloudinary } from "cloudinary";
import fileUpload from "express-fileupload";
import blogRoute from "./routes/blog.routes.js";
import cookieParser from "cookie-parser";


dotenv.config();

const app = express();

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./tmp/",
  }),
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRoute);
app.use("/api/blog", blogRoute);
// app.use("/api/user", userRoute);
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

const startServer = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.log("MongoDB connection error:", err.message);
  }
};

startServer();

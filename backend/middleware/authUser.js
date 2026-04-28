import User from "../modals/user.modal.js";
import jwt from "jsonwebtoken";


// Authentication middleware to protect routes and ensure only authenticated users can access certain endpoints
export const isAuthenticated = async (req, res, next) => {
  try {
  const token =
  req.cookies?.jwt ||
  (req.headers.authorization?.startsWith("Bearer ")
    ? req.headers.authorization.split(" ")[1]
    : null);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({
        message: "Unauthorized: User not found",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Auth middleware error:", error.message);
    return res.status(401).json({
      message: "Unauthorized: Invalid token",
    });
  }
};


// Authorization middleware to restrict access to certain routes based on user roles (e.g., admin-only routes)
export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    console.log("User role:", req.user.role);
    console.log("Allowed roles:", roles);

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: "Access denied",
      });
    }

    next();
  };
};
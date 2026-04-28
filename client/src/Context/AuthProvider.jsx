import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

 useEffect(() => {
  const fetchBlogs = async () => {
    try {
      const token = localStorage.getItem("token");

      console.log("TOKEN FROM LOCALSTORAGE:", token);

      if (!token) {
        console.log("Token not found. Please login first.");
        return;
      }

      const res = await axios.get("http://localhost:5000/api/blog/allBlogs", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBlogs(res.data.blogs || res.data);
    } catch (error) {
      console.log("STATUS:", error.response?.status);
      console.log("ERROR DATA:", error.response?.data);
      console.log("ERROR MESSAGE:", error.message);
    }
  };

  fetchBlogs();
}, []);

  return (
    <AuthContext.Provider value={{ blogs }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
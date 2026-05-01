import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const { data } = await axios.post(
      "http://localhost:5000/api/user/login",
      {
        email,
        password,
        role,
      }
    );

    console.log(data);
    toast.success("Login successful");

    localStorage.setItem("token", data.token);

    setEmail("");
    setPassword("");
    setRole("user");
  } catch (error) {
    console.log(error.response?.data || error.message);
    toast.error(error.response?.data?.message || "Login failed");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <form onSubmit={handleLogin}>
          <div className="font-semibold text-xl text-center">
            Blog<span className="text-blue-500">ify</span>
          </div>

          <h1 className="text-xl font-semibold mb-6">Login</h1>

          <select
            className="w-full p-2 mb-4 border rounded-md"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select a role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <input
            type="email"
            placeholder="Enter Email"
            className="w-full p-2 mb-4 border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="w-full p-2 mb-4 border rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold hover:bg-blue-800 duration-300 px-4 py-2 rounded"
          >
            Login
          </button>

          <div className="text-sm mt-4">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Register here
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

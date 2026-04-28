import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("http://localhost:5000/api/user/login", {
        email,
        password,
        role,
      });

      console.log("LOGIN RESPONSE:", data);

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.user?.role || role);

      alert("Login successful ✅");

      if ((data.user?.role || role) === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/");

        
      }

      localStorage.setItem("token", data.token);

// ❌ navigate hata do
// navigate("/");

// ✅ ye use karo
window.location.href = "/";
    } catch (error) {
      console.log("Login error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Login failed ❌");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <br />
        <br />

        <select value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <br />
        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
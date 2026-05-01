import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [education, setEducation] = useState("");
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
const changePhotoHandler =(e)=>{
  const file = e.target.files[0]
  console.log(e)
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload=()=> {
    setPhotoPreview(reader.result)
    setPhoto(file)
  }
}
const handleRegister = async(e)=>{
  e.preventDefault()
  const formData = new FormData()
  formData.append("name", name)
  formData.append("email", email)
  formData.append("phone", phone)
  formData.append("password", password)
  formData.append("role", role)
  formData.append("education", education)
  formData.append("photo", photo)
  try{
const {data} = await axios.post("http://localhost:5000/api/user/register", formData,{
  headers: {"Content-Type": "multipart/form-data"}
})
console.log(data)
toast.success("Registration successful")
setName("")
setEmail("")
setPhone("")

setPassword("")
setRole("user")
setEducation("")
setPhoto(null)
setPhotoPreview(null)
  }catch(error){
   toast.error("Registration failed")
  }

}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <form onSubmit={handleRegister}>
          <div className="font-semibold text-xl text-center">
            Blog<span className="text-blue-500">ify</span>
          </div>

          <h1 className="text-xl font-semibold mb-6">Register</h1>

          <select
            className="w-full p-2 mb-4 border rounded-md"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="" >Select a role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <input
            type="text"
            placeholder="Enter Name"
            className="w-full p-2 mb-4 border rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter phone"
            className="w-full p-2 mb-4 border rounded-md"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
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

          <input
            type="text"
            placeholder="Enter Education"
            className="w-full p-2 mb-4 border rounded-md"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          />

          <input 
            type="file"
            accept="image/*"
            className="w-full p-2 mb-4 border rounded-md"
           onChange={changePhotoHandler}
            
          />

          {photoPreview && (
            <img
              src={photoPreview ?`${photoPreview}` : "https://via.placeholder.com/150"}
              alt="Preview"
              className="w-32 h-32 object-cover mb-4"
            />
          )}

          <button 
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold hover:bg-blue-800 duration-300 px-4 py-2 rounded"
          >
            Register
          </button>

          <div className="text-sm mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login here
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
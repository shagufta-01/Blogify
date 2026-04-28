import React from 'react'
import Navbar from './Components/Navbar'
import { useAuth } from './Context/AuthProvider';
import Footer from './Components/Footer'
import Home from  './Components/Home'
import Blogs from './Pages/Blogs'
import About from './Pages/About'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'
import Contact from './Pages/Contact'
import  {Routes, Route, BrowserRouter, useLocation} from 'react-router-dom'
function App() {
  const location =useLocation();
  const hideNavbarFooter = ["/dashboard","/login","/register"].includes(location.pathname)
  const {blogs} =useAuth()
  console.log(blogs)
  return (
    <>
   {!hideNavbarFooter && <Navbar />}
   
   <Routes>
    {/* <Route exact path="/" element={<Home />} /> */}
    <Route exact path="/blogs"  element={<Blogs />} />
    <Route exact path = "/about" element={<About />} />
    <Route exact path="/contact"  element={<Contact />} />  
    <Route exact path = "/login" element={<Login />} />
    <Route exact path="/register"  element={<Register />} />
    <Route exact path = "/dashboard" element={<Dashboard />} />
   </Routes>
  
    {/* {!hideNavbarFooter && <Footer />} */}
    
    </>
  )
}

export default App
import React, { useState } from "react";
import { useAuth } from "../Context/AuthProvider";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
function Navbar() {
  const { blogs } = useAuth();
  const [show, setShow] = useState(false);
  console.log(blogs);
  return (
    <>
      <nav className="shadow-lg px-4 py-3">
        <div className="flex items-center justify-between container mx-auto">
          <div className="font-semibold text-xl">
            Blog<span className="text-blue-500">ify</span>
          </div>
          {/* Desktop Menu */}
          <div className="mx-4">
            <ul className="flex space-x-6 hidden md:flex">
              <Link to="/" className="hover:text-blue-800 duration-300">
                Home
              </Link>
              <Link to="/blogs" className="hover:text-blue-800 duration-300">
                Blog
              </Link>
              <Link to="/creator" className="hover:text-blue-800 duration-300">
                Creator
              </Link>
              <Link to="/about" className="hover:text-blue-800 duration-300">
                About
              </Link>
              <Link to="/contact" className="hover:text-blue-800 duration-300">
                Contact
              </Link>
            </ul>
            <div
              className="md:hidden"
              onClick={() => {
                setShow(!show);
              }}
            >
              {show ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>

          <div className="space-x-2 hidden md:flex">
            <Link
              to="/dashboard"
              className="bg-blue-600 text-white font-semibold hover:bg-blue-800 duration-300 px-4 py-2 rounded"
            >
              Dashboard
            </Link>
            <Link
              to="/login"
              className="bg-red-600 text-white font-semibold hover:bg-red-800 duration-300 px-4 py-2 rounded"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {show && (
          <div className="bg-white">
            <ul className="flex flex-col h-screen items-center justify-center space-y-3 md:hidden text-xl">
              <Link
                to="/"
                onClick={() => setShow(!show)}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                className="hover:text-blue-800 duration-300"
              >
                Home
              </Link>
              <Link
                to="/blogs"
                onClick={() => setShow(!show)}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                className="hover:text-blue-800 duration-300"
              >
                Blogs
              </Link>
              <Link
                to="/creator"
                onClick={() => setShow(!show)}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                className="hover:text-blue-800 duration-300"
              >
                Creator
              </Link>
              <Link to="/about" className="hover:text-blue-800 duration-300">
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => setShow(!show)}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                className="hover:text-blue-800 duration-300"
              >
                Contact
              </Link>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;

{
  /* <AiOutlineMenu /> */
}

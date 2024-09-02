import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedinIn } from 'react-icons/fa'
// import {ioutlineTwitter} from 'react-icons/io5'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'


const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)
  const handleclick = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className="w-full h-[80px] flex justify-between items-center px-4 backdrop-blur text-gray-300 z-0">
      {/* Menu */}
      <ul className="hidden sm:flex pl-[410px]">
        <li>Home</li>
        <li>About</li>
        {/* <li>Skills</li> */}
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleclick} className="sm:hidden absolute right-8 z-10">
        {showMenu ? (
          <FaTimes className="text-2xl" />
        ) : (
          <FaBars className="text-2xl" />
        )}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          showMenu
            ? "absolute top-0 left-0 w-full h-screen bg-[#0a192f] bg-opacity-95 backdrop-blur flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Projects</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[250%] left-0">
        <ul>
          {/* github */}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="h-[60px] flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/gelila-tefera-7a7006259/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <FaLinkedinIn size={30} />
            </a>
          </li>

          {/* linkedin */}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700">
            <a
              className="h-[60px] flex justify-between items-center w-full text-gray-300"
              href="https://github.com/GelilaT"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          {/* email */}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-400">
            <a
              className="h-[60px] flex justify-between items-center w-full text-gray-300"
              href="mailto:gelilat.gizaw@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar

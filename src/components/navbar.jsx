import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedinIn } from 'react-icons/fa'
// import {ioutlineTwitter} from 'react-icons/io5'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Button from './ui/button'


const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)
  const handleclick = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className="w-full h-[80px] flex justify-end items-center px-20 mb-5 text-gray-300 z-50">
      {/* Menu */}
      <div className="hidden sm:flex justify-center items-center gap-64">
        <ul className="hidden sm:flex justify-center items-center gap-14">
          <li className="hover:text-blue-500">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-blue-500">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-blue-500">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-blue-500">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* Hamburger */}
      <div onClick={handleclick} className="sm:hidden absolute right-8 z-50">
        {showMenu ? (
          <FaTimes className="text-2xl" />
        ) : (
          <FaBars className="text-2xl" />
        )}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center bg-opacity-100 z-40 items-center ${
          showMenu ? "block" : "hidden"
        }`}
      >
        <li className="py-6 text-4xl hover:text-blue-500">
          <a href="/">Home</a>
        </li>
        <li className="py-6 text-4xl hover:text-blue-500">
          <a href="#about">About</a>
        </li>
        <li className="py-6 text-4xl hover:text-blue-500">
          <a href="#projects">Projects</a>
        </li>
        <li className="py-6 text-4xl hover:text-blue-500">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar

import React from 'react'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiArrowNarrowRight, HiOutlineMail } from "react-icons/hi";

const Side = () => {
  return (
    <div className='hidden lg:block relative'>
      <div className="absolute top-48 left-0 lg:flex flex-col gap-4 p-4 z-50">
        <ul className="flex flex-col">
          {/* LinkedIn */}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-15px] duration-300 bg-blue-600">
            <a
              className="h-[60px] flex gap-5 items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/gelila-tefera-7a7006259/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
              <FaLinkedinIn size={30} />
            </a>
          </li>

          {/* GitHub */}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-15px] duration-300 bg-gray-700">
            <a
              className="h-[60px] flex justify-between items-center w-full text-white px-4"
              href="https://github.com/GelilaT"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
              <FaGithub size={30} />
            </a>
          </li>

          {/* Email */}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-15px] duration-300 bg-green-500">
            <a
              className="h-[60px] flex justify-between items-center w-full text-white px-4"
              href="mailto:gelilat.gizaw@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
              <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Side

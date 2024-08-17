import React from 'react'
import CSS from '../assets/css.png'
import HTML from '../assets/html.png'
import JS from '../assets/javascript.png'
import REACT from '../assets/react.png'
import TAILWIND from '../assets/tailwind.png'
import GIT from '../assets/github.png'
import NODE from '../assets/node.png'
import MONGODB from '../assets/mongo.png'
import PYTHON from '../assets/python.png'
import Figma from '../assets/figma.png'
import NextJS from '../assets/nextjs.png'

const Skills = () => {
  return (
    <div id="skills" className="bg-[#0a192f] text-gray-300 px-20">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-500">
            Skills
          </p>
        </div>
      </div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 text-center py-8">
        <div className="shadow-md shadow-[#235058] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
          <p className="my-4">HTML</p>
        </div>

        <div className="shadow-md shadow-[#235058] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
          <p className="my-4">CSS</p>
        </div>

        <div className="shadow-md shadow-[#235058] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={JS} alt="HTML icon" />
          <p className="my-4">Javascript</p>
        </div>

        <div className="shadow-md shadow-[#235058] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={REACT} alt="HTML icon" />
          <p className="my-4">React</p>
        </div>

        <div className="shadow-md shadow-[#235058] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={TAILWIND} alt="HTML icon" />
          <p className="my-4">Tailwind</p>
        </div>

        <div className="shadow-md shadow-[#235058] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={PYTHON} alt="HTML icon" />
          <p className="my-4">Python</p>
        </div>

        <div className="shadow-md shadow-[#235058] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={GIT} alt="HTML icon" />
          <p className="my-4">Git</p>
        </div>

        <div className="shadow-md shadow-[#235058] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={Figma} alt="Figma icon" />
          <p className="my-4">Figma</p>
        </div>

        <div className="shadow-md shadow-[#235058] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={MONGODB} alt="MongoDB icon" />
          <p className="my-4">MongoDB</p>
        </div>
      </div>
    </div>
  );
}

export default Skills

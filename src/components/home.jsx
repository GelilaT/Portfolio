import React from 'react'
// import { useState } from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name="home" className='bg-[#0a192f] w-full h-screen'>
    
    {/* container */}
    <div className='max-w-[1000px] mx-auto px-20 flex flex-col justify-center h-full'>
        <p class="bg-gradient-to-r from-blue-500 to-pink-600 text-transparent bg-clip-text text-4xl ">Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#d8dffa]'>Gelila Tefera</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#81869f]'>Full Stack Developer & UI Designer</h2>
        <p className='text-[#81869f] py-4 max-w-[700px]'>Passionate full-stack developer skilled in front-end and back-end technologies, delivering robust web applications with exceptional <span className='bg-gradient-to-r from-blue-500 to-pink-600 text-transparent bg-clip-text'>user experiences.</span></p>

        <div>
            <button className='text-white group border-2 border-blue-500 px-6 py-3 my-2 flex items-center hover:bg-blue-500'>Check out My Work <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-2'/></span></button>
        </div>
    </div>
    </div>
  ) 
}

export default Home

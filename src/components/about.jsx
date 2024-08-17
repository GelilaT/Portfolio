import React from 'react'

const About = () => {
  return (
    <div id="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-500'>About</p>
            </div>
            <div></div>
        </div>

            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold '>
                    <p>Hey. I'm <span className='bg-gradient-to-r from-blue-500 to-pink-400 text-transparent bg-clip-text'>Gelila</span>, nice to see you here. Please take a look around</p>
                </div>
                <div>
                    <p className='text-[#81869f]'>
                      I'm a full-stack developer based in Addis Ababa, Ethiopia. 
                      I enjoy building everything from small business sites to rich interactive web apps. 
                      If you are a business seeking a web presence or an employer looking to hire, you can get in touch with me here.
                    </p>
                </div>
            </div>

      </div>
    </div>
  )
}

export default About

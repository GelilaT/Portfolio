import React from 'react'
import { BackgroundGradient } from './ui/bgGradient'

const Skill = (props) => {
    return (
      <div className="text-white text-center py-8 bg-[#0a192f]">
        <BackgroundGradient className="rounded-[22px] p-4 w-72 h-48">
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={props.image} alt={props.alt} />
            <p className="my-4">{props.text}</p>
          </div>
        </BackgroundGradient>
      </div>
    );
}

export default Skill

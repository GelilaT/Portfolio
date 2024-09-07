import React from 'react'

const Button = (props) => {
  return (
    <div href="#contact" className="hidden sm:flex">
      <button
        className="relative group bg-blue-500 hover:bg-opacity-20 text-blueblack-light 
            hover:text-foreground px-4 py-2 flex items-center justify-center gap-2
            transition-all duration-300 ease-in-out
            text-nowrap ml-10 my-5 text-white"
      >
        <div
          className="absolute top-0 left-0 w-[1px] h-0 group-hover:h-full 
            bg-gradient-to-b from-transparent to-green-200
            transition-all duration-700 ease-in-out
            "
        ></div>
        <div
          className="absolute top-0 left-0 w-0 group-hover:w-full h-[1px]
            bg-gradient-to-r from-transparent to-green-200
            transition-all duration-700 ease-in-out
            "
        ></div>
        <div
          className="absolute bottom-0 right-0 w-[1px] h-0 group-hover:h-full 
            bg-gradient-to-t from-transparent to-green-200
            transition-all duration-700 ease-in-out
            "
        ></div>
        <div
          className="absolute bottom-0 right-0 w-0 group-hover:w-full h-[1px]
            bg-gradient-to-l from-transparent to-green-200
            transition-all duration-700 ease-in-out
            "
        ></div>
        <p>{props.name}</p>
      </button>
    </div>
  );
}

export default Button



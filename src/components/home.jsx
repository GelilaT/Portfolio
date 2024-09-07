import React from "react";
import { motion } from "framer-motion"; 
import { HiArrowNarrowRight, HiOutlineMail } from "react-icons/hi";
import { BackgroundBeams } from "./ui/bgBeams";
import Navbar from "./navbar";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Side from "./ui/side";

const Home = () => {
  return (
    <div
      id="home"
      className="bg-[#0a192f] w-full h-screen relative overflow-hidden"
    >
      <Side />
      <Navbar />
      {/* Background Beams */}
      {/* <div className="-z-10 absolute inset-0">
        <BackgroundBeams />
      </div> */}

      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-20 flex flex-col justify-center h-full relative">
        <motion.p
          className="bg-gradient-to-r from-blue-500 to-pink-600 text-transparent bg-clip-text text-4xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-7xl font-bold text-[#d8dffa]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        >
          Gelila Tefera
        </motion.h1>

        <motion.h2
          className="text-4xl sm:text-7xl font-bold text-[#81869f]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
        >
          Full Stack Developer & UI Designer
        </motion.h2>

        <motion.p
          className="text-[#81869f] py-4 max-w-[700px]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.6, ease: "easeOut" }}
        >
          Passionate full-stack developer skilled in front-end and back-end
          technologies, delivering robust web applications with exceptional{" "}
          <span className="bg-gradient-to-r from-blue-500 to-pink-600 text-transparent bg-clip-text">
            user experiences.
          </span>
        </motion.p>

        <motion.div
          className="mb-44"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 0.8, ease: "easeOut" }}
        >
          <a href="#projects">
            <button className="text-white group border-2 border-blue-700 px-6 py-3 my-2 flex items-center hover:bg-blue-700">
              Check out My Work{" "}
              <motion.span
                className="group-hover:rotate-90 duration-300"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <HiArrowNarrowRight className="ml-2" />
              </motion.span>
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

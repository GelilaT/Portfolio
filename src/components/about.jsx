import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref: uiRef, inView: uiInView } = useInView({ triggerOnce: false });
  const { ref: webRef, inView: webInView } = useInView({ triggerOnce: false });

  return (
    <div id="about" className="w-full h-screen relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="w-full h-1/2 bg-[#0a192f]"></div>
        <div className="w-full h-1/2 bg-white absolute bottom-0"></div>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch justify-center gap-10 p-10 max-w-[1000px] mx-auto shadow-sm rounded-lg bg-white relative z-10 shadow-blue-200">
        {/* UI/UX */}
        <motion.div
          ref={uiRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: uiInView ? 1 : 0, y: uiInView ? 0 : 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center bg-white rounded-lg p-6 flex-1"
        >
          <img src="./icon1.png" alt="ui logo" className="w-16 h-14 mb-4" />
          <h1 className="font-bold text-2xl mb-2">Designer</h1>
          <p className="max-w-xs mb-4 leading-7">
            I prioritize a straightforward content structure, clean design
            patterns, and well-considered interactions.
          </p>
          <h2 className="text-[#484FFF] my-1">
            Here are some things I enjoy designing:
          </h2>
          <p className="mb-4">UX, UI, Web, Apps, Logos</p>
          <h2 className="text-[#484FFF] my-1">Design Tools:</h2>
          <p>Figma</p>
          <p className="mt-1">Pen & Paper</p>
          <p className="mt-1">Sketch</p>
        </motion.div>

        {/* Web */}
        <motion.div
          ref={webRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: webInView ? 1 : 0, y: webInView ? 0 : 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center bg-white rounded-lg p-6 flex-1"
        >
          <img src="./icon2.png" alt="web logo" className="w-16 h-14 mb-4" />
          <h1 className="font-bold text-2xl mb-2">Front-end developer</h1>
          <p className="max-w-52 mb-4 leading-7">
            I enjoy coding from scratch and love bringing ideas to life in the
            browser.
          </p>
          <h2 className="text-[#26E467] my-1">Languages:</h2>
          <p className="mb-4">Python, JS, Java, HTML</p>
          <h2 className="text-[#26E467] my-1">Dev Tools:</h2>
          <p>React</p>
          <p className="mt-1">NextJS</p>
          <p className="mt-1">TailwindCSS</p>
          <p className="mt-1">Github</p>
          <p className="mt-1">Bootstrap</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

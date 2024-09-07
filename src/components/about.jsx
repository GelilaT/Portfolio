import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref: uiRef, inView: uiInView } = useInView({ triggerOnce: false });
  const { ref: webRef, inView: webInView } = useInView({ triggerOnce: false });

  return (
    <div
      id="about"
      className="w-full min-h-screen relative overflow-hidden bg-[#0a192f] py-16"
    >
      {/* Background Gradient */}
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-10 px-6 lg:px-10 py-12 max-w-[1200px] mx-auto shadow-sm rounded-lg bg-white relative z-10 shadow-blue-200">
        {/* UI/UX */}
        <motion.div
          ref={uiRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: uiInView ? 1 : 0, y: uiInView ? 0 : 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center bg-white rounded-lg p-6 flex-1"
        >
          <img
            src="./icon1.png"
            alt="ui logo"
            className="w-16 h-14 mb-4 md:w-20 md:h-18"
          />
          <h1 className="font-bold text-2xl mb-2 md:text-3xl">Designer</h1>
          <p className="max-w-xs mb-4 leading-7 text-sm md:text-base">
            I prioritize a straightforward content structure, clean design
            patterns, and well-considered interactions.
          </p>
          <h2 className="text-[#484FFF] my-1 text-sm md:text-base">
            Here are some things I enjoy designing:
          </h2>
          <p className="mb-4 text-sm md:text-base">UX, UI, Web, Apps, Logos</p>
          <h2 className="text-[#484FFF] my-1 text-sm md:text-base">
            Design Tools:
          </h2>
          <p className="mt-3 text-sm md:text-base">Figma</p>
          <p className="mt-3 text-sm md:text-base">Pen & Paper</p>
          <p className="mt-3 text-sm md:text-base">Sketch</p>
        </motion.div>

        {/* Web */}
        <motion.div
          ref={webRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: webInView ? 1 : 0, y: webInView ? 0 : 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center bg-white rounded-lg p-6 flex-1"
        >
          <img
            src="./icon2.png"
            alt="web logo"
            className="w-16 h-14 mb-4 md:w-20 md:h-18"
          />
          <h1 className="font-bold text-2xl mb-2 md:text-3xl">
            Front-end Developer
          </h1>
          <p className="max-w-52 mb-4 leading-7 text-sm md:text-base">
            I enjoy coding from scratch and love bringing ideas to life in the
            browser.
          </p>
          <h2 className="text-[#26E467] my-1 text-sm md:text-base">
            Languages:
          </h2>
          <p className="mb-4 text-sm md:text-base">Python, JS, Java, HTML</p>
          <h2 className="text-[#26E467] my-1 text-sm md:text-base">
            Dev Tools:
          </h2>
          <p className="mt-3 text-sm md:text-base">React</p>
          <p className="mt-3 text-sm md:text-base">NextJS</p>
          <p className="mt-3 text-sm md:text-base">TailwindCSS</p>
          <p className="mt-3 text-sm md:text-base">Github</p>
          <p className="mt-3 text-sm md:text-base">Bootstrap</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

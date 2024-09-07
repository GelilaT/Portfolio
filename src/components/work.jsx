import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {useInView} from "../hooks/hooks";
import { BackgroundBeams } from "./ui/bgBeams";
import { BackgroundGradient } from "./ui/bgGradient";

const Work = () => {
  const [setRef, isVisible] = useInView({ threshold: 0.5 });
  const [currentImage, setCurrentImage] = useState("./value1.png");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentImage((prevImage) =>
          prevImage === "./value1.png" ? "./value2.png" : "./value1.png"
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <div id="work" className="w-full text-gray-300 bg-[#0a192f] pt-60 z-10">
      <div className="relative">
        <h1 className="text-6xl font-bold text-center">Portfolio</h1>
        <p className="text-center text-slate-500">Most recent works</p>
        <p
          className="font-bold text-9xl pl-32 text-[#ACEB85] pt-10"
          data-aos="fade-right"
        >
          Value Prep
        </p>
        <div className="flex mx-36 gap-10 leading-8">
          <div>
            <p className="max-w-96" data-aos="fade-up" data-aos-delay="100">
              Value college prep involved the development of a comprehensive
              educational platform designed to help Ethiopian students navigate
              the college application process and achieve their academic goals.
            </p>
          </div>
          <div>
            <img
              ref={setRef}
              src={currentImage}
              alt="Value College Prep"
              className="w-[550px]"
              data-aos="fade-left"
              data-aos-delay="200"
            />
          </div>
        </div>
        <p
          className="font-bold text-9xl pl-32 absolute -bottom-40 -right-1 text-[#8c90fd]"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          Prep
        </p>
      </div>

      {/* Yobek */}
      <div className="pt-96 relative">
        {/* Title */}
        <p
          className="font-bold text-9xl text-center lg:text-8xl md:text-7xl sm:text-6xl transition duration-300 ease-in-out transform hover:scale-105"
          data-aos="fade-up"
        >
          Yobek
        </p>

        {/* Background Gradient */}
        <BackgroundGradient
          className="w-fit h-fit ml-20"
          data-aos="fade-right"
          data-aos-delay="100"
        />

        {/* Image 1 */}
        <img
          src="./yobek1.png"
          alt="this is a picture of yobek"
          className="w-[600px] mx-auto pt-20 transition duration-300 ease-in-out transform hover:scale-105"
          data-aos="zoom-in"
          data-aos-delay="200"
        />

        {/* Description 1 */}
        <p
          className="max-w-80 pt-10 pl-20 text-base sm:text-sm lg:text-lg transition duration-300 ease-in-out transform hover:translate-x-2"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Yobek is a web application designed for a real estate company to
          showcase available houses for sale or rent.
        </p>

        {/* Image 2 */}
        <img
          src="./yobek2.png"
          alt="this is a picture of yobek"
          className="w-[600px] mx-auto pt-16 transition duration-500 ease-in-out transform hover:scale-110"
          data-aos="fade-left"
          data-aos-delay="400"
        />

        {/* Overlay Text and Right-aligned Paragraph */}
        <div
          className="flex relative items-center justify-center"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {/* Large Background Text */}
          <div>
            <h1 className="font-bold text-[170px] text-center opacity-10 lg:text-[150px] md:text-[120px] sm:text-[90px]">
              Yobek
            </h1>
          </div>

          {/* Right-aligned Paragraph */}
          <div>
            <p className="absolute right-10 top-10 pr-4 max-w-72 lg:max-w-60 md:max-w-48 sm:max-w-40 text-base sm:text-sm lg:text-lg transition duration-300 ease-in-out transform hover:translate-y-1">
              As both the UI/UX designer and full stack developer, I developed a
              seamless and visually appealing platform that allows users to
              browse, filter, and view property listings with ease.
            </p>
          </div>
        </div>

        {/* Image 3 */}
        <img
          src="./yobek3.png"
          alt="this is a picture for yobek"
          className="w-[600px] mx-auto transition duration-300 ease-in-out transform hover:scale-105"
          data-aos="zoom-in"
          data-aos-delay="600"
        />

        {/* Description 2 */}
        <p
          className="max-w-72 pt-10 pl-20 text-base sm:text-sm lg:text-lg transition duration-300 ease-in-out transform hover:translate-x-2"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          The app features an intuitive interface and responsive design,
          ensuring a smooth user experience across all devices.
        </p>

        {/* Image 4 */}
        <img
          src="./yobek4.png"
          alt="this is a picture for yobek"
          className="w-[600px] mx-auto transition duration-300 ease-in-out transform hover:scale-105"
          data-aos="fade-right"
          data-aos-delay="800"
        />

        {/* Description 3 */}
        <p
          className="pl-[930px] pr-10 text-base sm:text-sm lg:text-lg transition duration-300 ease-in-out transform hover:translate-y-1"
          data-aos="fade-left"
          data-aos-delay="900"
        >
          Yobek aims to simplify the house-hunting process by providing a
          user-friendly platform with comprehensive property information and
          advanced search functionalities.
        </p>
      </div>
    </div>
  );
};

export default Work;

import React, { useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Value Prep",
    image: "./value1.png",
    description:
      "Value college prep involved the development of a comprehensive educational platform designed to help Ethiopian students navigate the college application process and achieve their academic goals.",
    technologies: ["React", "TailwindCSS", "Figma", "ExpressJS"],
    category: ["Frontend", "UI/UX"], // Updated to be an array
    additionalImages: ["./value1.png", "./value3.png"],
  },
  {
    id: 2,
    title: "YOBEK",
    image: "./yobek1.png",
    description:
      "Yobek is a web application designed for a real estate company to showcase available houses for sale or rent. As both the UI/UX designer and full stack developer, I developed a seamless and visually appealing platform that allows users to browse, filter, and view property listings with ease.",
    technologies: ["React", "ExpressJS", "Figma", "TailwindCSS"],
    category: ["Fullstack", "UI/UX"], // Updated to be an array
    additionalImages: ["./yobek1.png", "./yobek2.png", "./yobek3.png"],
  },
  {
    id: 3,
    title: "EHPSA",
    image: "./et1.png",
    description:
      "As a UI/UX designer, I had the opportunity to contribute to the digital presence of EHP-SA, focusing on creating an intuitive, engaging, and visually appealing user experience for their platform. The design aimed to reflect the association's commitment to professionalism and community while providing an accessible and user-friendly interface for its members.",
    technologies: ["Figma"],
    category: ["UI/UX"], // Updated to be an array
    additionalImages: [
      "./et1.png",
      "et2.png",
      "./et3.png",
      "/et4.png",
      "et5.png",
    ],
  },
];

const technologyColors = {
  React: "bg-blue-700 text-white",
  TailwindCSS: "bg-[#4231AF] text-white",
  NodeJS: "bg-green-500 text-white",
  MongoDB: "bg-green-700 text-white",
  Figma: "bg-[#3FC364] text-white",
  "Adobe XD": "bg-purple-500 text-white",
  ExpressJS: "bg-[#FFB800] text-white",
  "Front-end": "bg-blue-500 text-white",
};

const categories = ["All", "Frontend", "Fullstack", "UI/UX"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category.includes(selectedCategory)
        );

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  const handleOverlayClick = (e) => {
    if (e.target.id === "overlay") {
      setSelectedProject(null);
    }
  };

  const handleNestedOverlayClick = (e) => {
    if (e.target.id === "nested-overlay") {
      setSelectedImage(null);
    }
  };

  return (
    <div
      id="projects"
      className="max-w-7xl mx-auto p-6 bg-[#0a192f] text-gray-300 pt-32"
    >
      <h1 className="text-5xl font-bold text-center">Portfolio</h1>
      <p className="text-center text-slate-500">Most recent works</p>

      {/* Categories */}
      <div className="flex justify-center space-x-2 mb-6 mt-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-1 rounded-md text-sm mx-5 ${
              selectedCategory === category
                ? "bg-blue-700 text-white"
                : "text-sm"
            } hover:bg-blue-600 hover:text-white transition-all`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 mt-10 px-5 md:px-16 lg:px-24 xl:px-72 ">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-lg shadow-md cursor-pointer transition-transform duration-300 transform hover:scale-105"
            onClick={() => setSelectedProject(project)} // Set selected project on click
          >
            <div className="w-full h-44">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full rounded-md object-cover" // Adjust to cover container
              />
            </div>
            <h3 className="text-md font-semibold mt-4">{project.title}</h3>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          id="overlay"
          className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-start overflow-y-auto text-[#0a192f]"
          onClick={handleOverlayClick}
        >
          <button
            className="absolute top-0 right-5 text-white p-2 transition-all"
            onClick={() => setSelectedProject(null)}
          >
            X
          </button>
          <div
            className="bg-white w-full mt-8 relative rounded-lg py-6 overflow-y-auto px-5 sm:px-10 md:px-16 lg:px-40"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4">{selectedProject.title}</h2>
            <div className="flex flex-col lg:flex-row items-start justify-center gap-6 lg:gap-60">
              <p className="text-sm mb-4 max-w-xl">
                {selectedProject.description}
              </p>
              <button className="bg-blue-700 px-4 py-2 rounded-lg text-white hover:bg-blue-600">
                Get in touch
              </button>
            </div>
            <div className="mt-4 mb-8">
              {selectedProject.technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-lg text-sm font-semibold mr-2 ${
                    technologyColors[tech] || "bg-gray-300 text-black"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-10 items-center my-10">
              {selectedProject.additionalImages?.map((image, index) => (
                <div
                  key={index}
                  className="relative bg-gradient-to-r from-blue-200 to-pink-50 p-10 rounded-md w-full"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image}
                    alt={`Additional ${index + 1}`}
                    className="w-full h-[400px] object-cover rounded-lg shadow-xl shadow-blue-100"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Nested Modal */}
          {selectedImage && (
            <div
              id="nested-overlay"
              className="fixed inset-0 bg-black bg-opacity-80 z-60 flex justify-center items-center"
              onClick={handleNestedOverlayClick}
            >
              <div
                className="bg-white w-full max-w-3xl p-4 rounded-lg relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute -top-5 -right-4 text-white"
                  onClick={() => setSelectedImage(null)}
                >
                  X
                </button>
                <img
                  src={selectedImage}
                  alt="Full Size"
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-xl shadow-blue-100"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Projects;

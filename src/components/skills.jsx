import React from "react";
import Skill from "./Skill";
import { BackgroundGradient } from "./ui/bgGradient";

const Skills = () => {
  return (

    <div className="mx-auto w-full bg-[#0a192f] text-white">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="font-bold text-4xl inline border-b-4 border-pink-500">
            Skills
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-10 bg-[#0a192f] mx-auto">
        <Skill image="./html.png" text="HTML" alt="HTML icon" />
        <Skill image="./css.png" text="CSS" alt="CSS icon" />
        <Skill
          image="./javascript.png"
          text="JavaScript"
          alt="JavaScript icon"
          />
      </div>

      <div className="flex gap-10 justify-center">
        <Skill image="./react.png" text="React" alt="React icon" />
        <Skill image="./tailwind.png" text="Tailwind" alt="Tailwind icon" />
        <Skill image="./python.png" text="Python" alt="python icon" />
      </div>

      <div className="flex gap-10 justify-center">
        <Skill image="./figma.png" text="Figma" alt="Figma icon" />
        <Skill image="./mongo.png" text="MongoDB" alt="MongoDB icon" />
        <Skill image="./github.png" text="Git" alt="Github icon" />
      </div>
    </div>
  );
};

export default Skills;

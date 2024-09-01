import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Work from "./components/work"
import Skill from "./components/Skill";
import { BackgroundBeams } from "./components/ui/bgBeams";

function App() {
  return (
    <div>
      {/* <BackgroundBeams /> */}
        {/* <Navbar /> */}
        <Home />
        <About />
        {/* <Skills /> */}
        <Work />

    </div>
  );
}

export default App;

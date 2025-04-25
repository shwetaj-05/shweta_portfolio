import React from "react";
import Navbar from "./components/Navbar";
import Heroes from "./components/Heroes";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col flex-wrap px-6 md:px-16 lg:px-24">
        <div className="flex align-middle min-h-dvh" id="Home">
          <Heroes />
        </div>
        <div id="About">
          <About />
        </div>
        <div id="Experience">
          <Experience />
        </div>
        <div id="Projects">
          <Projects />
        </div>
      </div>
    </>
  );
};

export default Home;

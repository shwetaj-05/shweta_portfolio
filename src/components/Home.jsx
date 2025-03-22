import React from "react";
import "../styles/auth.css";

const Home = () => {
  return (
    <div className="w-screen h-screen">
      <video
        autoPlay
        loop
        muted
        className="w-screen h-screen object-cover"
      >
        <source src="/assets/loader_desired.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Home;

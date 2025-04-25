import React from "react";
import "../../styles/main.css";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      
      <div className="design-section">
        <div className="timeline">

          <div className="timeline-empty"></div>

          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>

          <div className="timeline-component timeline-content">
            <h3>B.Tech in Computer Engg.</h3>
            <p>@COEP Tech University, Pune</p>
            <p>2023-2027</p>
            <p>cgpa: 8.59</p>
          </div>

          <div className="timeline-component timeline-content">
            <h3>Junior College</h3>
            <p>Purohit Kanya Prashala, Sangli</p>
            <p>2021-2023</p>
            <p>HSC score: 94.33%</p>
          </div>

          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>

          <div className="timeline-empty"></div>

          <div className="timeline-empty"></div>

          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>

          <div className=" timeline-component timeline-content">
            <h3>College Entrance Exams</h3>
            <p>MHT-CET: 99.94percentile</p>
            <p>JEE: 89%</p>
            <p>2022-2023</p>
          </div>


          <div className=" timeline-component timeline-content">
            <h3>High School</h3>
            <p>S. M. High School</p>
            <p>SSC: 97%</p>
            <p>2019-2021</p>
          </div>

          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default About;

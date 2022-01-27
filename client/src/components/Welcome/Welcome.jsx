import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return <div className="banner-area">
            <div className="banner-text">
            <h1>The Habit App</h1>
            <p> This project was made with React/Redux connecting to a Rails API. The styling for this app uses Styled Components. This project was made 
              for the final phase of the Flatiron Curriculum. 

              The inspiration for this app comes from my own desire to track the consistency with which I stick to my habits. It is my hope that this App 
              will serve others in their aim to better themselves. 
            </p>
            <Link to ="/register">Register</Link>
            </div>
  </div>
  ;
};

export default Welcome;
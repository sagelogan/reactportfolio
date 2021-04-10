import React, { useState, useEffect } from "react";
import "./Home.css";
import About from "../../components/About";
import Resume from "../../components/Resume";
import Project from "../../components/Project";

function Home() {
  return (
    <div>
     <Resume/>
     <About/>
     <Project/>
    </div>
  );
}

export default Home;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar,Row, Container, Col} from 'react-bootstrap';
import './Project.css';

function Project() {

  return (
    <>
            <div >
                <img src="./assets/lyfehere.png" class="project" />
            </div>
            <div class="container" id = "deals2">
                <img src="./assets/collegeplus.png" alt="" class="project" id="deals"/>
            </div>
            <div>
            <img src="./assets/TheRangeSite.png"  class="project"/>
            <div class = "grid-text"  id="food3"></div>
            </div>
       
        
      
            <div class="container" id = "events2">
                <img src="./assets/demo.gif"  alt="" class="project" id="events"/>
                <div class = "grid-text"  id="events3"></div>
            </div>
            <div class="container" id = "outdoors2">
                <img src="./assets/Covid_Travel_Planner_Demo.gif" alt="" class="project" id="outdoors" />
                <div class = "grid-text"  id="outdoors3"></div>
            </div>
          
       
    </>
  );
}

export default Project;
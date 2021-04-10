import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar,Row, Container, Col, Section} from 'react-bootstrap';
import './About.css';

function About() {

  return (
    <>
    <img class="bioPic"src="./assets/me_snow2.jpg"/> 
    <h4 class="center">About me</h4>
    <p class="light">I am a 19 year-old business owner and Full Stack Web-Developer. I own The Range, a concert venue and recording studio located in Las Cruces, New Mexico. I co-founded The Range in 2019, months before high-school graduation. The Range hosts live concerts with local and multi-national artists alike. The studio side of the business came after only a few months of hosting shows. Along side general music production for artists we produce live sessions, interviews, and more to our online audience.
    In 2019 I attended CSSI at Google where I built my inital foundation for Full-stack Web Development and fell in love with building websites to solve problems. In 2020, amidst a global pandemic I attended the University of Texas Austin Full-Stack Bootcamp.</p>        

    <h4>My Work</h4>
          <p>I like to make stuff. Below are some examples of the stuff I've made. Please don't hesitate to reach out so I can make some stuff with or for you. :) 

            Lyfe Here is an in progress project I've been working on to help local businesses with their online presence. This is a project made from scratch and using the Google's cloud services as a backend. 
            
            College Plus is a web app I made in a team while at Google to help graduating high-school students with the journey to their post-secondary education.
          
            The last website below is for The Range. I made this website through Squarespace before I knew how to code. I am fully comfortable making websites from the ground up or integrating and expanding upon something you've started to make in website builders like Squarespace or Wix.
          
            I always tinker or seek out another project that I can learn something from so expect more showcased work soon...</p>
    </>
  );
}

export default About;
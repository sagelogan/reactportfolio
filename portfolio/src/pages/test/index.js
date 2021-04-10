import React, { useState, useEffect } from "react";
import "./Home.css";
import About from "../../components/About";
import Resume from "../../components/Resume";
import Project from "../../components/Project";

function Home() {
  return (
    <>
    <body>

<nav class="white" role="navigation">
  <div class="nav-wrapper container">
    <a id="logo-container" href="#" class="brand-logo">Logan Sage</a>
    <ul class="right hide-on-med-and-down">
      <li><a href="./Assets/Resume.pdf">Download/View Resume</a></li>
    </ul>
  
    <ul id="nav-mobile" class="sidenav">
      
      <li><a href="./Assets/Pictures/Resume.pdf">Download/View Resume</a></li>
    </ul>
    <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
  </div>
</nav>


<div id="index-banner" class="parallax-container">
  <div class="section no-pad-bot">
    <div class="container">
      <br><br>
      <h1 class="header center black-text text-lighten-2 shadow" >Full Stack Web Developer</h1>
      <div class="row center">
        <h3 class="header col s12 light black-text shadow">I like to make stuff.</h5>
      </div>
      <br><br>
    </div>
  </div>
  <div class="parallax"><img src="./Assets/Pictures/texturefabrik_vectors_61 (1)1024_1.jpg" alt="Unsplashed background img 1"></div>
</div>


<div class="container">
  <div class="section">
    <div class="row">
      <div class="col s12 m12">
        <div class="icon-block">
          <h2 class="center brown-text"><img class="bioPic"src="./Assets/Pictures/me_snow2.jpg"></h2>
          <h4 class="center">About me</h4>
          <p class="light">I am a 19 year-old business owner and Full Stack Web-Developer. I own The Range, a concert venue and recording studio located in Las Cruces, New Mexico. I co-founded The Range in 2019, months before high-school graduation. The Range hosts live concerts with local and multi-national artists alike. The studio side of the business came after only a few months of hosting shows. Along side general music production for artists we produce live sessions, interviews, and more to our online audience.
            <br><br>In 2019 I attended CSSI at Google where I built my inital foundation for Full-stack Web Development and fell in love with building websites to solve problems. In 2020, amidst a global pandemic I attended the University of Texas Austin Full-Stack Bootcamp.</p>
        </div>
      </div>
    </div>
  </div>
</div>

  
<div class="container">
  <div class="section">
    <div class="row">
      <div class="col s12 center">
        <h3><i class="mdi-content-send brown-text"></i></h3>
        <h4>My Work</h4>
        <p class="left-align light">I like to make stuff. Below are some examples of the stuff I've made. Please don't hesitate to reach out so I can make some stuff with or for you. :) <br><br>

          Lyfe Here is an in progress project I've been working on to help local businesses with their online presence. This is a project made from scratch and using the Google's cloud services as a backend. <br><br>
          
          College Plus is a web app I made in a team while at Google to help graduating high-school students with the journey to their post-secondary education.<br><br>
        
          The last website below is for The Range. I made this website through Squarespace before I knew how to code. I am fully comfortable making websites from the ground up or integrating and expanding upon something you've started to make in website builders like Squarespace or Wix.<br><br>
        
          I always tinker or seek out another project that I can learn something from so expect more showcased work soon...</p>
      </div>
    </div>

      <!-- my work image grid -->
    <div id="row1">
      <div class="container" id = "shop2">
            <img src="./Assets/Pictures/lyfehere.png"  alt="" class="img" id="shops">
            <div class = "grid-text" style="color: white;" id="shops3"></div>
      </div>
      <div class="container" id = "deals2">
            <img src="./Assets/Pictures/collegeplus.png" alt="" class="img" id="deals" >
            <div class = "grid-text" style= "color:white;" id="deals3"></div>
      </div>
      <div class="container" id = "food2">
        <img src="./Assets/Pictures/TheRangeSite.png" alt="" class="img" id="food">
        <div class = "grid-text" style="color: white;" id="food3"></div>
      </div>
    </div>
    </div>
    
    <div id="row1">
      <div class="container" id = "events2">
            <img src="./Assets/Pictures/demo.gif"  alt="" class="img" id="events">
            <div class = "grid-text" style="color: white;" id="events3"></div>
      </div>
      <div class="container" id = "outdoors2">
            <img src="./Assets/Pictures/Covid_Travel_Planner_Demo.gif" alt="" class="img" id="outdoors" >
            <div class = "grid-text" style= "color:white;" id="outdoors3"></div>
      </div>
      <div class="container" id = "music2">
        <img src="./Assets/Pictures/Capture.png" alt="" class="img" id="music">
        <div class = "grid-text" style="color: white;" id="music3"></div>
      </div>
    </div>
  </div>
</div>




<footer class="page-footer white">
 
  <!-- social links  -->
  <div class="social-buttons">
  
    <a href="https://www.linkedin.com/in/logan-sage-71021018b/" class="fa fa-linkedin">Linkedin</a>

    <a href="https://www.instagram.com/logan.sage/" class="fa fa-instagram">Instagram</a> 

    <a href="https://www.youtube.com/channel/UCk5k-zDWVQuH5xBDswh2Ppg?view_as=subscriber" class="fa fa-youtube">YouTube</a>

    <a href="https://github.com/sagelogan" class="fa fa-github">GitHub</a>


</div>


</footer>


<!--  Scripts-->
<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="js/materialize.js"></script>
<script src="js/init.js"></script>
<script src="./js/script.js"></script>

</body>

    </>
  );
}

export default Home;
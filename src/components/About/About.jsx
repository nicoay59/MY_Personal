import React from 'react'
import "./About.css";
import Header from "./../Header/Header.jsx"
import Footer from "./../Footer/Footer.jsx"
import aboutVector from "./../../assets/about_vector.png";
import aboutAnime from "./../../assets/about_anime.gif";
function About() {
  return (
    <div className='section-container'>
      <Header 
        heading="About Me"
        subHeading="Full Stack Develepor | IT Engineer">
      </Header>
      <div className='about-main'>
        <div className='about-main-left'>
            <h3 className='about-sub-heading'>Developer</h3>
            <p className='about-sub-heading-details'>
              I’m a self-taught <u>full stack engineer</u>. building software for people and businesses. I love building software that solves real-world problems, add value to society through technology.
            </p>
            <h3 className='about-sub-heading'>IT Engineer</h3>
            <p className='about-sub-heading-details'>
              I've been build an RT/RW Net at my home where i offered Internet Services (WiFi Services) to client at neighborhood.
              I Just Love to be IT Enthusiast.
            </p>
            <h3 className='about-sub-heading'>Download My CV</h3>
            <p className='about-sub-heading-details'>
              <a href="/CV_Nico_Ari.pdf" download style={{textDecoration:"none"}}>
              <button className='btn'style={{backgroundColor:"lightblue", border:"none", color:"white", fontSize:"20px", justifyContent:"center", marginLeft:"0px"}}>Download CV</button>
              </a>
            </p>
        </div>
        <div className='about-main-right'>
            <img 
                src={aboutAnime}
                alt="about-anime"
                className="about-anime"
                loading="lazy"
            />
        </div>
      </div>
      <Footer 
        phrase="Check out my "
        link="projects!"
        toAddress="/projects">
      </Footer>
      <div className='vector-frame'>
        <img src={aboutVector}
          alt="about"
          className='about-vector'
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default About
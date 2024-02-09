import { Component, useEffect } from "react";
import "./navbarStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faAtom } from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";
import person1 from "./person1.jpeg";
import event from "./event.jpg";
import agri from "./agri.jpg";
import hosp from "./hosp.jpg";
import todo from "./todo.jpg";
import pro from "./pro.jpg";
import html5 from "./html5.png";
import js from "./js.png";
import css3 from "./css3.png";
import react from "./react.png";
import nodejs from "./nodejs.png";
import developer from "./developer.png";
import thankyou from "./thankyou.png";
import { Link, Element } from 'react-scroll';
function ScrollAnimation() {
 
  {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
  }
  const CVResume = 'port\src\component\CVResume.pdf';
  return (
    <div className="body">
      <nav data-aos="zoom-in">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <FontAwesomeIcon icon={faBars} />
        </label>
        <label className="logo">
          Portfolio
          <sup>
            
            <a href="index.html" className="sup">
              <FontAwesomeIcon icon={faCopyright} />
            </a>
          </sup>
        </label>
        <ul id="navbar">
          <li >
           <Link> <a className="active" href="/frontpage" >Home</a></Link>
          </li>
          <li>
          <Link to="about" spy={true} smooth={true} offset={-70} duration={800}>  <a>About</a></Link>
          </li>
          <li>
          <Link  to="project" spy={true} smooth={true} offset={-70} duration={800}>  <a>Projects</a></Link>
          </li>
          <li>
          <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={800}>  <a>Contact</a></Link>
          </li>
        </ul>
      </nav>
      <label className="logo-outer">
          Portfolio
          <sup>
            
            <a href="index.html" className="sup">
              <FontAwesomeIcon icon={faCopyright} />
            </a>
          </sup>
        </label>
      <div className="outer">
        <div className="outer-info" data-aos="fade-right">
          <h1 className="hi">Hi,</h1>
          <h2 className="iam">
            I'am <span>Karan M</span>
          </h2>
          <h2 className="iam"> <Typewriter
                onInit={(typewriter) => {
                  function startTypewriter() {
                      typewriter
                          .typeString("Web Developer")
                          .pauseFor(1000)
                          .deleteAll()
                          .typeString("Fullstack Developer")
                          .start();
                        }
                  setInterval(1000,startTypewriter());
              }}
              
            /></h2>
          <h3 className="description">
            -My mission is to design and develop a website{" "}
          </h3>
          <h3 className="description"> that you and your audience love</h3>
        </div>
        <div className="person" data-aos="fade-left">
          <img src={person1} alt="person1" />
        </div>
        <div className="btt" data-aos="zoom-out">
         <a href="port\src\component\CVResume.pdf" download={CVResume}> <button className="button2">Download CV</button></a>
        </div>
        <div className="social" data-aos="zoom-in">
          <a href="https://instagram.com/_.karan._m?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://linkedin.com/in/karan-m-3a3b4224b">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="index.html">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>
    
      <div className="about-out" data-aos="fade-right" sectionid="about">
        <div className="about-in">
        <Element name="about"></Element>
          <h1> ABOUT</h1>

          <hr></hr>
        </div>
      </div>
      <div className="content">
        <div div className="person1" data-aos="fade-right">
          <img src={developer} alt="developer.png"></img>
        </div>
        
      <div className="aboutme-in" data-aos="fade-left">
        <h1>
          Web <span>Developer</span>
        </h1>
       
        <h3>
          Wlecome!! Hi there! I'm KARAN M, a passionate and experienced web
          developer with a strong focus on creating engaging and user-friendly
          web applications. I have honed my skills in front-end and back-end
          development{" "}
        </h3>
        <h1>
          <span>Skills</span>
        </h1>
        <div className="framework">
          <img className="frameworkimage" src={js} alt="html5.png"></img>

          <img className="frameworkimage" src={react} alt="html5.png"></img>

          <img className="frameworkimage" src={html5} alt="html5.png"></img>

          <img className="frameworkimage" src={css3} alt="css3.png"></img>

          <img className="frameworkimage" src={nodejs} alt="nodejs.png"></img>
        </div>
        
      </div>
      </div>
      
      <div className="skillset-out" >
        <div className="skillset-in">
          <h1>Projects</h1>
          <hr></hr>
        </div>
      </div>
      <Element name="project"></Element>
      <div className="project-all" data-aos="fade-right">
      
        <div className="project-out" >
       
          <div className="project1">
            <img className="pro-img" src={event} alt="person1" />
            <a href="https://github.com/KARAN-M077/Event_Management">
              <div className="pro1-details">
              <h1>Event Regesitration</h1>
              <p>
                This is a project where we have created an event registration
                system using react and node js.
              </p>
            </div></a>
          </div>
        </div>
        <div className="project2-out">
          <div className="project2">
            <img className="pro-img" src={agri} alt="person1" />
           <a href="https://github.com/KARAN-M077/Plant_diseases_identifier_APP_UI"> <div className="pro2-details">
              <h1>Plant_diseases_identifier_APP_UI </h1>
              <p>
                This is a project where we have created an event registration
                system using react and node js.
              </p>
            </div></a>
          </div>
        </div>
      </div>
      <div className="achive-out" data-aos="fade-right">
        <div className="achive-in">
          <h1>Group Project</h1>
          <hr></hr>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>

      <div className="project-all" data-aos="fade-right">
        <div className="project-out" data-aos="fade-right">
          <div className="project1">
            <img className="pro-img" src={hosp} alt="person1" />
           <a href="https://github.com/KARAN-M077/UI_Hospitalmanagementsystem"> <div className="pro-details">
              <h1>Hospital Management</h1>
              <p>
                This is a project where we have created an event registration
                system using react and node js.
              </p>
            </div></a>
          </div>
        </div>
        <div className="project-out" data-aos="fade-right">
          <div className="project1">
            <img className="pro-img" src={pro} alt="person1" />
            <a href="https://github.com/KARAN-M077/SIH_Project_UI"><div className="pro-details">
              <h1>Smart Education</h1>
              <p>
                This is a project where we have created an event registration
                system using react and node js.
              </p>
            </div></a>
          </div>
        </div>
        <div className="project-out" data-aos="fade-right">
          <div className="project1">
            <img className="pro-img" src={pro} alt="person1" />
           <a href="https://github.com/KARAN-M077/Google_Hackathon_TO-DOproject_UI">
             <div className="pro-details">
              <h1>To-DO list (UI)</h1>
              <p>
                This is a project where we have created an event registration
                system using react and node js.
              </p>
            </div>
            </a>
          </div>
        </div>
      </div>      
      <div className="formouter">
      <Element name="contact"></Element>
      <div className="thankyou">
        <img src={thankyou} alt="thankyou png" className="thankyouimg"></img>
      </div>
      <div className="forminner">
       <p>"Delving into the dynamic world of full-stack development, where creativity meets functionality. Crafting visually stunning interfaces and architecting robust server-side systems – it's the art and science of the digital realm."
       <br></br>
        <span className="messagetext">"Feel free to <span>contact me</span> through the <span>social media links above</span>. I will reply to your messages as soon as possible."
        </span>
        </p>
    </div>
    </div>
    </div>
  );
}
export default ScrollAnimation;

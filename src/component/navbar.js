import { useState, useEffect } from "react";
import "./navbarStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCopyright , faLink } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faAtom } from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import { Tooltip } from 'react-tooltip';

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
import footerimg from "./footerimg.png";
import mongodb from "./mongodb.png";
import flutter from "./flutter.png";
import vscode from "./vscode.png";
import karanResume from "./KaranResume.pdf"
import karan_Resume from "./Karan_Resume.pdf"
import project1img from "./project1img.png";
import appimg from ".//appimg.png";
import ecommerceimg from "./ecommerceimg.png";
import smartedu from "./smarteduimg.png";
import timerimg from "./timerimg.png"
import todoimg from "./todoimg.png";
import { Link, Element } from 'react-scroll';
function ScrollAnimation() {
 
  {
    useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);
  }

  
  
       const [showMenu, setShowMenu] = useState(false);

const toggleMenu = () => {
  setShowMenu(!showMenu);
};

return (
  <>
  <nav data-aos="zoom-in">
    <input type="checkbox" id="check" checked={showMenu} />
    <label htmlFor="check" className="checkbtn" onClick={toggleMenu}>
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
    <ul id="navbar" className={showMenu ? "show" : ""}>
      <li className="active" >
        <Link to="frontpage" spy={true} smooth={true} offset={-70} duration={800} onClick={toggleMenu}>
          Home
        </Link>
      </li>
      <li>
        <Link to="about" spy={true} smooth={true} offset={-70} duration={800} onClick={toggleMenu}>
          About
        </Link>
      </li>
      <li>
        <Link to="project" spy={true} smooth={true} offset={-70} duration={800} onClick={toggleMenu}>
          Projects
        </Link>
      </li>
      <li>
        <Link to="contact" spy={true} smooth={true} offset={-70} duration={800} onClick={toggleMenu}>
          Contact
        </Link>
      </li>
    </ul>
  </nav>
     
      <div className="outer">
        <div className="outer-info" data-aos="fade-right">
          <h1 className="hi">Hi,</h1>
          <h2 className="iam">
            I'am <span>Karan M</span>
          </h2>
          <h2 className="iam">   <Typewriter
    onInit={(typewriter) => {
        function startTypewriter() {
            typewriter
              .start()
                .typeString("Software Developer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Fullstack Developer")
                .pauseFor(1000)
                .deleteAll()         
        }
        const intervalId = setInterval(startTypewriter, 2000); 
        return () => clearInterval(intervalId);
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
        <a href={karan_Resume} download="Karan-Resume" target="_blank" rel="noreferer">  <button className="button2">Download CV</button> </a>
        </div>
        <div className="social" data-aos="zoom-in">
          <a href="https://instagram.com/_.karan._m?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://linkedin.com/in/karan55">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/KARAN-M077">
            <FontAwesomeIcon icon={faGithub} />
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
        <Typewriter
    onInit={(typewriter) => {
        function startTypewriter() {
            typewriter
              .start()
                .typeString("Software Engineer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Fullstack Developer")
                .pauseFor(1000)
                .deleteAll()         
        }
        const intervalId = setInterval(startTypewriter, 2000); 
        return () => clearInterval(intervalId);
    }}
/>
        </h1>
       
        <h3>
          Welcome!! Hi there! I'm KARAN M, a passionate and experienced web
          developer with a strong focus on creating engaging and user-friendly
          web applications. I have honed my skills in front-end and back-end
          development{" "}
        </h3>
        <h1>
          <span>Skills & Tools Used</span>
        </h1>
        <div className="framework" data-aos="fade-right">
          <img className="frameworkimage" src={js} alt="js.png" data-aos="zoom-in"></img>

          <img className="frameworkimage" src={react} alt="react.png" data-aos="zoom-in"></img>

          <img className="frameworkimage" src={html5} alt="html5.png" data-aos="zoom-in"></img>

          <img className="frameworkimage" src={css3} alt="css3.png" data-aos="zoom-in"></img>

          <img className="frameworkimage" src={nodejs} alt="nodejs.png" data-aos="zoom-in"></img>

          <img className="frameworkimage" src={mongodb} alt="mongodb.png" data-aos="zoom-in"></img>

          <img className="frameworkimage" src={flutter} alt="flutter.png" data-aos="zoom-in"></img>

          <img className="frameworkimage" src={vscode} alt="vscode.png" data-aos="zoom-in"></img>
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
      <div className="project-outer"data-aos="zoom-in">
        <div className="project1">
          <div className="project-img">
            <div className="image">
            <img src={project1img} alt="projectimg"/>
            </div>
          </div>
          <div className="project-name">
          <h1>Event Regesitration</h1>
          <a href="https://github.com/KARAN-M077/Event_Management">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          
          </div>
          <div className="project-content">
            <p>
            Event registration platform using HTML,
              CSS, Node.js, and MongoDB. Created intuitive forms to
              collect user details and implemented an admin page for
              efficient data management
            </p>
          </div>
        </div>
        <div className="project1">
          <div className="project-img">
            <div className="image">
            <img src={appimg} alt="projectimg"/>
            </div>
          </div>
          <div className="project-name">
          <h1>Diseases_identifier_APP_UI </h1>
          <a href="https://github.com/KARAN-M077/Plant_diseases_identifier_APP_UI">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          </div>
          <div className="project-content">
          <p>
              Plant disease identifier app with Flutter and
              Dart, allowing users to upload samples and receive
              accurate results. Leveraging Flutter's UI and Dart's
              functionality, I ensured a seamless user experience.
              </p>
          </div>
        </div>
        <div className="project1">
          <div className="project-img">
            <div className="image">
            <img src={ecommerceimg} alt="projectimg"/>
            </div>
          </div>
          <div className="project-name">
          <h1>Ecommerce</h1>
          <div className="project-link">
          <a  href="https://github.com/KARAN-M077/Ecommerce-ui">
            <FontAwesomeIcon icon={faGithub} />
          </a>
         
          <a href="https://karancseecommerce.netlify.app"><FontAwesomeIcon icon={faLink} /></a>
          </div>
          </div>
          <div className="project-content">
            <p>
            Ecommerce platform using Reactjs,
              CSS, Node.js, and MongoDB. UI has been Uploaded feel free to use.Working on the backend.Once Comleted will be updated
            </p>
          </div>
        </div>
        <div className="project1">
          <div className="project-img">
            <div className="image">
            <img src={timerimg} alt="projectimg"/>
            </div>
          </div>
          <div className="project-name">
          <h1>Timer</h1>
          <a href="https://github.com/KARAN-M077/">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          </div>
          <div className="project-content">
            
          JavaScript-based timer project, showcasing my adeptness in JavaScript programming. Through meticulous coding, I ensured the functionality and efficiency of the timer, demonstrating my commitment to delivering quality solutions. This project underscored my proficiency in JavaScript and my capability to develop practical applications.
          </div>
        </div>
        <div className="project1">
          <div className="project-img">
            <div className="image">
            <img src={todoimg} alt="projectimg"/>
            </div>
          </div>
          <div className="project-name">
          <h1>To-DO list (UI)</h1>
              
          <a href="https://github.com/KARAN-M077/Google_Hackathon_TO-DOproject_UI">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          </div>
          <div className="project-content">
          <p style={{fontWeight:900}}>Group Project</p>
          <p>
              In our group project, I led the development of key features including the settings page, login, and sign-up functionality. My responsibilities involved designing intuitive user interfaces and implementing secure authentication processes. These contributions played a crucial role in enhancing the overall usability and functionality of the application. Through collaborative efforts, we delivered a polished product to our users.
              </p>
          </div>
        </div>
        <div className="project1">
          <div className="project-img">
            <div className="image">
            <img src={smartedu} alt="projectimg"/>
            </div>
          </div>
          <div className="project-name">
          <h1>Smart Education</h1>
              
          <a href="https://github.com/KARAN-M077/SIH_Project_UI">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          </div>
          <div className="project-content">
          <p style={{fontWeight:900}}>Group Project</p>
          <p>
              My primary focus was on frontend development. I took the lead in designing and implementing critical components such as the admin page and all frontend forms, including login and sign-up functionalities.
              </p>
          </div>
        </div>
       
        
      </div>
      
      {/* <div className="project-all" data-aos="fade-right">
      
        <div className="project-out" >
       
          <div className="project1">
            <img className="pro-img" src={event} alt="person1" />
            <a href="https://github.com/KARAN-M077/Event_Management">
              <div className="pro1-details">
              <h1>Event Regesitration</h1>
              <p>
              Event registration platform using HTML,
              CSS, Node.js, and MongoDB. Created intuitive forms to
              collect user details and implemented an admin page for
              efficient data management
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
              Plant disease identifier app with Flutter and
              Dart, allowing users to upload samples and receive
              accurate results. Leveraging Flutter's UI and Dart's
              functionality, I ensured a seamless user experience.

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
              My primary focus was on frontend development. I took the lead in designing and implementing critical components such as the admin page and all frontend forms, including login and sign-up functionalities.
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
              My primary focus was on frontend development. I took the lead in designing and implementing critical components such as the admin page and all frontend forms, including login and sign-up functionalities.
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
              In our group project, I led the development of key features including the settings page, login, and sign-up functionality. My responsibilities involved designing intuitive user interfaces and implementing secure authentication processes. These contributions played a crucial role in enhancing the overall usability and functionality of the application. Through collaborative efforts, we delivered a polished product to our users.
              </p>
            </div>
            </a>
          </div>
        </div>
      </div>     
      <div className="footer-hr">
        <div className="inner-hr">
        <hr/>
        </div>
      </div> */}
      <div className="formouter">
      <Element name="contact"></Element>
      <div className="thankyou">
        <img src={footerimg} alt="footerimg png" className="thankyouimg"></img>
      </div>
      <div className="forminner">
       <p>"Delving into the dynamic world of full-stack development, where creativity meets functionality. Crafting visually stunning interfaces and architecting robust server-side systems – it's the art and science of the digital realm."
       <br></br>
        <span className="messagetext">"Feel free to <span>contact me</span> through the <span>social media links above</span>. I will reply to your messages as soon as possible."
        </span>
        </p>
    </div>
    </div>
    </>
  );
}
export default ScrollAnimation;

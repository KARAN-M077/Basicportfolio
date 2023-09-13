import { Component, useEffect } from "react";
import "./navbarStyles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faAtom } from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import person1 from './person1.jpeg';
function ScrollAnimation() {
    {useEffect(()=>{
      AOS.init({duration: 2000 } )
    },[])
   }
      return(
          <>
          <nav data-aos="zoom-in">
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <FontAwesomeIcon icon={faBars} />
      </label>
      <label className="logo">
        Portfolio
        <sup>
          {' '}
          <a href="index.html" className="sup">
            <FontAwesomeIcon icon={faCopyright} />
          </a>
        </sup>{' '}
      </label>
      <ul id="navbar">
        <li>
          <a href="/frontpage">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="index.html">Contact</a>
        </li>
      </ul>
    </nav>
    <div className="outer">
        <div className="outer-info"data-aos="fade-right">
            <h1 className="hi">HI,</h1>
            <h2 className="iam">I'am  <span>Karan M</span></h2>
            <h2 className="iam">Web Designer</h2> 
            <h3 className="description">-My mission is to design and develop a website </h3>
            <h3 className="description"> that you and your audience love</h3>
        </div>
        <div className="person" data-aos="fade-left">
            <img src={person1} alt="person1" />
        </div>
        <div className="btt" data-aos="zoom-out">
            <button className="button2">
                Download CV
            </button>
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
        <div className="about-in" >
            <h1> ABOUT</h1>
        
            <hr></hr>
        </div>
    </div>
    <div className="content">
        <div className="person1" data-aos="fade-right">
            <img src={person1} alt="person1" />
        </div>
        <div className="aboutme-in" data-aos="fade-left">
                <h1>Web <span>Developer</span></h1>
                <h3>Wlecome!! Hi there! I'm KARAN M, a passionate and experienced web developer with a strong focus on creating engaging and user-friendly web applications.  I have honed my skills in front-end and back-end development such as JavaScript , React JS , HTML , CSS, as well as UI/UX design. I love transforming ideas into functional and visually appealing websites that leave a lasting impression. I am constantly seeking opportunities to learn and grow in this ever-evolving field, keeping up-to-date with the latest technologies and industry trends.</h3>
                <ul >
                  <li>Birthday: 01-Mar-2004</li><br></br>
                  <li>Phone: +91 9345437715</li><br></br>
                  <li>City: Erode,India</li><br></br>
                  <li>Degree: BE-CSE</li><br></br>
                  <li>Email: karanm17ab@gmail.com</li><br></br>
                </ul>
              </div>
    </div>
    <div className="skillset-out" data-aos="fade-right" >
        <div className="skillset-in" >
            <h1>SKILL SET & MY SERVICES</h1>
            <hr></hr>
           
        </div>
    </div>
    <div className="skill-out"  data-aos="fade-right">
    <div className="skill">
              <li><h3>JavaScrip <span className="prec">85%</span></h3>
              <span className="bar"><span className="js"></span></span>
              </li>
              <li><h3>MySQL <span className="prec">85%</span></h3>
              <span className="bar"><span className="my"></span></span>
              </li>
              <li><h3>HTML/CSS<span className="prec">90%</span></h3>
              <span className="bar"><span className="html"></span></span>
              </li>
              <li><h3>React JS <span className="prec">80%</span></h3>
              <span className="bar"><span className="rjs"></span></span>
              </li>
              <li><h3>M0ngoDB <span className="prec">75%</span></h3>
              <span className="bar"><span className="db"></span></span>
              </li>
            </div>
            <div className="service">
            <div className="ser1"  data-aos="zoom-in">
              <a href="index.html"><FontAwesomeIcon icon={faAtom} /></a>
              <h3 className="h3">Website <span>development</span> <br></br><br></br> Website will be created based on your needs!!</h3>
            </div>
            <div className="ser2" data-aos="zoom-in" >
            <a href="index.html"> <FontAwesomeIcon icon={faFileLines} /></a>
            <h3 className="h3">Website<span> Host</span><br></br><br></br>Hosting at affordable price!!</h3>
            </div>
            <div className="ser3" data-aos="zoom-in" >
            <a href="index.html"> <FontAwesomeIcon icon={faBlog} /></a>
            <h3 className="h3">Content<span> Writing</span><br></br><br></br> Words will attract people!!</h3>
            <h3 className="h5"></h3>
            </div>
            </div>
    </div>
    <div className="contact-out" data-aos="zoom-in"  >
        <div className="contact-in" >
            <h1> CONTACT ME <span>:</span></h1>
            
        </div>
    </div>
    <div className="contactme-out" data-aos="zoom-in" >
    <div className="contactme" >
              <h2>Phone No: <span>+91 9345437715 </span></h2>
              <h2>E-mail : <span>karanm17ab@gmail.com</span></h2>
            </div>
    </div>
        </>
      )
}
export default ScrollAnimation;
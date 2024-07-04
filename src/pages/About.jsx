import React from 'react';
import '../assets/styles/About.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import planeImg from '../assets/images/plane.png';
import logoImg from '../assets/images/logo.png';
import AnimationScript from '../components/AnimationScript';

const About = () => {
  return (
    <div>
      <section className="aboutussection" id="aboutussection">
        <img className="planeimg" src={planeImg} alt="" />
        <div className="aboutus">
          <div className="aboutuscontainer">
            <div className="topborder"></div>
            <h2>About Us</h2>
            <p>
              We are founded in 2021 in Armenia, Moni Travel was established with a passion for travel and a commitment to providing exceptional travel services.
            </p>
            <button id="seemorebtn">
              See more <i></i>
            </button>
          </div>
        </div>
        <img className="logoimg" src={logoImg} alt="" width="350px" height="300px" />
        <div className="spacer"></div>
      </section>
      <section className="seemoresection" id="seemoresection">
        <img className="seemorelogoimg" src={logoImg} alt="" width="350px" height="300px" />
        <div className="seemorecontainer">
          <p className="ourmissiontxt">
            Our mission is to offer our clients the best travel destinations tailored to their interests, ensuring a memorable and seamless travel experience from start to finish.
          </p>
          <div className="background"></div>
          <i className="fa-solid fa-arrow-left" id="backbtn"></i>
          <div className="boxes">
            <div className="firstbox">
              <div className="values">
                <h3>Values</h3>
                <span>› Customer-centric approach</span>
                <span>› Quality and reliability</span>
                <span>› Personalized service</span>
                <span>› Sustainable and responsible travel</span>
              </div>
            </div>
            <div className="secondbox">
              <h3>Why choose us</h3>
              <p>
                Our team of travel experts has extensive knowledge and experience in the travel industry, ensuring you receive the best advice and recommendations.
              </p>
              <p>
                From the moment you contact with us until you return home, our dedicated team is here to assist you, ensuring a hassle-free travel experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      <AnimationScript />
    </div>
  );
};

export default About;

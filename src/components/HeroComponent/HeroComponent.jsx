import React from 'react';
import { Link } from 'react-scroll';
import ProjectImgIntro from '../Image/ProjectImgIntro';

const HeroComponent = () => {
  return (
    <div id="HeroComponent" className="HeroComponent-container">
      <div className="HeroComponent-innerComponent">
        <Link to="about" smooth duration={1000}>
          <div className="project-wrapper__text">
            <h3 className="HeroComponent-title">About Me</h3>
            <div className="HeroComponent-text">
              <li>3rd Year Student at Emory Univ.</li>
              <li>B.S. Computer Scinece</li>
              <li>Passionate Learner!</li>
              <li>Problem Solver</li>
              <li>Early Adopter</li>
              <li>Currently working on frontend part of two projects: SYPP and BLAY</li>
            </div>
          </div>
        </Link>
      </div>

      <div className="HeroComponent-innerComponent">
        <Link to="about" smooth duration={1000}>
          <div className="project-wrapper__text">
            <h3 className="HeroComponent-title">Programming Skills</h3>
            <div className="HeroComponent-text">
              <li>Java</li>
              <li>Python</li>
              <li>Javascript</li>
              <li>ReactJS</li>
              <li>HTML/(S)CSS</li>
              <li>PostgreSQL</li>
            </div>
          </div>
        </Link>
      </div>

      <div className="HeroComponent-innerComponent">
        <Link to="Save Your App(SYPP) Desktop" smooth duration={1000}>
          <div className="project-wrapper__text">
            <h3 className="HeroComponent-title">Save Your App(SYPP) Web Application</h3>
            <div className="HeroComponent-text">
              SYPP aims to reduce stress in job application process. Developing website application
              for Save Your Apps.{' '}
            </div>
          </div>
          <div className="hero-picture-container">
            <ProjectImgIntro alt="Save Your App(SYPP) Desktop" filename="Sypp_desktop.jpg" />
          </div>
        </Link>
      </div>
      <div className="HeroComponent-innerComponent">
        <Link to="Save Your App(SYPP) Chrome-Extension" smooth duration={1000}>
          <div className="project-wrapper__text">
            <h3 className="HeroComponent-title">Save Your App(SYPP) Chrome Extension</h3>
            <div className="HeroComponent-text">
              Developing Chrome Extension part of Save Your Apps.
            </div>
          </div>
          <div className="hero-picture-container">
            <ProjectImgIntro
              alt="Save Your App(SYPP) Chrome Extenstion"
              filename="Chrome_extension_main2.jpg"
            />
          </div>
        </Link>
      </div>
      <div className="HeroComponent-innerComponent">
        <Link to="Blay" smooth duration={1000}>
          <div className="project-wrapper__text">
            <h3 className="HeroComponent-title">Blay!</h3>
            <div className="HeroComponent-text">
              Start-up launch platform where everyone can join and initiate their dreams!
            </div>
          </div>
          <div className="hero-picture-container">
            <ProjectImgIntro alt="Blay" filename="blayhome.jpg" />
          </div>
        </Link>
      </div>

      <div className="HeroComponent-innerComponent">
        <Link to="JaeHoChoi.github.io" smooth duration={1000}>
          <div className="project-wrapper__text">
            <h3 className="HeroComponent-title">JaeHoChoi.github.io</h3>
            <div className="HeroComponent-text">Personal website build using ReactJS</div>
          </div>
        </Link>
        <div className="hero-picture-container">
          <ProjectImgIntro alt="JaeHoChoi.github.io" filename="PersonalWebsite.JPG" />
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;

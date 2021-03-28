import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Title from '../Title/Title';
import SubTitle from '../Title/SubTitle';

import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

// import Tabs from 'react-bootstrap/Tabs'
// import TabContainer from 'react-bootstrap/TabContainer'
// import TabPane from 'react-bootstrap/TabPane'

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Hello, everyone! \n I am an undergraduate CS student at Emory Univsersity.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'I am a problem solver . I enjoy finding problems around me, cracking them down, analyzing them, and coming up with creative ways to tackle them. I came to Emory undecided but my problem solving characters naturally allured me into the CS.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree ||
                    'I love learning new technologies. Although I am currently working on building web applications using ReactJS, I cannot wait until I get a chance to learn other programming frameworks!'}
                </p>
                {/* <div className = "about-wrapper-technology">
                  <li className>
                    Javascript
                  </li>
                  <li>
                    ReactJS
                  </li>
                  <li>
                    HTML/CSS
                  </li>
                  <li>
                    Java
                  </li>
                  <li>
                    Python
                  </li>
                  <li>
                    PostgreSQL
                  </li>
                </div> */}
                {/* {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )} */}
              </div>
            </Fade>
          </Col>
        </Row>
        <div className="skill-container">
          <SubTitle title="More About Myself" />
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link className="skill-tab" eventKey="first">
                      Education
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="skill-tab" eventKey="second">
                      Programming
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="skill-tab" eventKey="third">
                      Project Works
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="skill-tab" eventKey="fourth">
                      Other Interest
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div className="skill-content-padding">
                      <li className="skill-body">Emory Univsersity</li>
                      <div className="skill-body-sub">Computer Science, B.S.</div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div className="skill-content-padding">
                      <li className="skill-body">Java</li>
                      <li className="skill-body">JavaScript</li>
                      <li className="skill-body">ReactJS</li>
                      <li className="skill-body">HTML / (S)CSS</li>
                      <li className="skill-body">Python</li>
                      <li className="skill-body">PostgreSQL</li>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <div className="skill-content-padding">
                      <li className="skill-body">Save Your APP(SYPP) Web Application</li>
                      <li className="skill-body">Save Your APP(SYPP) Chrome Extension</li>
                      <li className="skill-body">BLAY</li>
                      <li className="skill-body">Web Portfolio</li>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <div className="skill-content-padding">
                      <li className="skill-body">Early adopter in new technologies</li>
                      <li className="skill-body">
                        Crazy in PC building, love to follow up with recent technologies
                      </li>
                      <li className="skill-body">Play web-based real-time strategy games</li>
                      <li className="skill-body">League of Legends</li>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </Container>
    </section>
  );
};

export default About;

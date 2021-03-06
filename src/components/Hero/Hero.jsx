import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

import background from '../../images/Desktop.png';
import HeroComponent from '../HeroComponent/HeroComponent';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;
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
    <section id="hero" className="jumbotron hero-padding">
      <div
        className="hero-main-padding"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '50%',
          height: '100%',
          margin: '0 auto',
        }}
      >
        <Container>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <h1 className="hero-title">
              {title || 'Hi, my name is'}{' '}
              <span className="text-color-main">{name || 'Your Name'}</span>
              <br />
            </h1>
            <div className="underline" />
            <h1 className="hero-subtitle">{subtitle || "I'm the Unknown Developer."}</h1>
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <p className="hero-cta">
              <span className="cta-btn cta-btn--hero">
                <Link to="contact" smooth duration={1000}>
                  {cta || 'Contact Me!'}
                </Link>
              </span>
            </p>
          </Fade>
          <Fade>
            <HeroComponent />
          </Fade>
        </Container>
      </div>
    </section>
  );
};

export default Header;

import React, { useState, useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta } = contact;
  const [buttonText, setButtonText] = useState('Email Me');

  function onClickButton() {
    navigator.clipboard.writeText('jcho427@emory.edu');
    setButtonText('Email Copied!');
  }

  return (
    <section id="contact">
      <Container className="contact-container">
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
            <button type="button" className="cta-btn cta-btn--resume" onClick={onClickButton}>
              {buttonText}
            </button>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;

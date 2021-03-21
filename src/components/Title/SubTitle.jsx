import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';

const SubTitle = ({ title }) => (
  <Fade bottom duration={1000} delay={300} distance="0px">
    <h4 className="section-subtitle">{title}</h4>
  </Fade>
);

SubTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SubTitle;

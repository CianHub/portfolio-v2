import React from 'react';
import { StyledSection } from '../../styles/StyledSection/StyledSection';
import Theme from '../../styles/theme';
import { AboutText } from '../../view/about-text/AboutText';
import Particles from 'react-particles-js';

const About: React.FC = () => {
  return (
    <StyledSection
      role="section"
      id="about"
      theme={Theme}
      backgroundColor={'transparent'}
      vertical={true}
    >
      <Particles
        height="100%"
        params={{
          polygon: {
            draw: { stroke: { color: 'rgba(255, 255, 255, .05)' } },
          },
        }}
        style={{
          position: 'fixed',
          right: 0,
          bottom: 0,
          left: 0,
          top: 0,
          zIndex: -100,
          height: '100vh',
          margin: 0,
          padding: 0,
          width: '100%',
          backgroundColor: Theme.colors.black,
        }}
      ></Particles>
      <AboutText />
    </StyledSection>
  );
};

export default About;

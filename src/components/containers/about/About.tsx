import React from 'react';
import { StyledSection } from '../../styles/StyledSection/StyledSection';
import Theme from '../../styles/theme';
import { AboutText } from '../../view/about-text/AboutText';
import { Margin } from '../../view/margin/Margin';

const About: React.FC = () => {
  return (
    <StyledSection role="About" id="about" theme={Theme}>
      <Margin marginCount={18} />
      <AboutText />
    </StyledSection>
  );
};

export default About;

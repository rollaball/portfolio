import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
const AboutContainer = styled.div`
  height: 100vh;
  position: relative;
`;
const CenterText = styled.div`
  margin: 10%;
  width: 50%;
  position: absolute;
`;
export default () => {
  return (
    <AboutContainer id="about">
      <ScrollAnimation offset='0' animateOnce animateIn="fadeIn">
        <CenterText>
          <h1 style={{ color: 'yellow' }}>Saurabh Shetty</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            molestie placerat sem et tristique. Fusce sit amet erat et erat
            rutrum tempor quis eget purus. Suspendisse eu hendrerit turpis, ut
            porttitor dui. Quisque at tempor elit. Sed pulvinar, arcu quis
            aliquam vehicula, lorem justo pellentesque felis, eu feugiat risus
            dolor sit amet augue. Duis non felis nec eros bibendum maximus. Duis
            ac augue tellus. Maecenas tempor odio est. Mauris tellus urna,
            tristique a aliquam id, efficitur ut erat. In hac habitasse platea
            dictumst. Suspendisse condimentum arcu augue, vitae tempus dui
            ultrices nec.
          </p>
        </CenterText>
      </ScrollAnimation>
    </AboutContainer>
  );
};

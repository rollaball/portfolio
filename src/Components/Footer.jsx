import React from 'react';
import styled from 'styled-components';
import Github from '../Images/github.jsx';
import Linkedin from '../Images/linkedin.jsx';
import Medium from '../Images/medium.jsx';
import Email from '../Images/email.jsx';
import ScrollAnimation from 'react-animate-on-scroll';
const FooterContainer = styled.footer`
  height: 100vh;
`;
const ContentContainer = styled.div`
  padding: 8% 10%;
  h1{
    color: yellow;
  }
  div{
    display: flex;
    height: 12em;
    width: 20% 
    align-items:center;
    justify-content: space-between;
    svg{
        height: 5em;
        fill:yellow;
        width: 5em;
        cursor: pointer;
        :hover {
            fill:#cccc00;
            
        }
    }
}span{
  display: flex;
  height: 5em;
  width: 10% 
  align-items:center;
  justify-content: space-around;
  svg{
      height: 2em;
      width: 2em
      fill:yellow;
      cursor: pointer;
      :hover {
          fill:#cccc00;
          
      }
  }
}
`;
export default () => {
  return (
    <ScrollAnimation offset={400} animateOnce animateIn="fadeIn">
      <FooterContainer id="contact">
        <ContentContainer>
          <h1 style={{ color: 'yellow' }}>Get in touch</h1>
          <div>
            {/* <a>
            <object type="image/svg+xml" data={github}>
              Your browser does not support SVG
            </object>
          </a> */}
            {/*  */}
            <a href="http://linkedin.com" target="_blank">
              <Linkedin />
            </a>
            <a href="http://gmail.com" target="_blank">
              <Email />
            </a>
          </div>
          <span>
            <a href="https://github.com" target="_blank">
              <Github />
            </a>
            <a href="http://medium.com" target="_blank">
              <Medium />
            </a>
          </span>
        </ContentContainer>
      </FooterContainer>
    </ScrollAnimation>
  );
};

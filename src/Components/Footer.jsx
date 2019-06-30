import React from 'react';
import styled from 'styled-components';
import Github from '../Images/github.jsx';
import Linkedin from '../Images/linkedin.jsx';
import Medium from '../Images/medium.jsx';
import Email from '../Images/email.jsx';
const FooterContainer = styled.footer`
  height: 100vh;
`;
const ContentContainer = styled.div`
  padding: 8% 10%;
  div{
    display: flex;
    height: 15em;
    width: 60% 
    align-items:center;
    justify-content: space-around;
    svg{
        height: 5em;
        width: 5em
        fill:rgba(114,74,237,1);
        cursor: pointer;
        :hover {
            fill:rgba(144,114,255,1);
            
        }
    }
}
`;
export default () => {
  return (
    <FooterContainer id="contact">
      <ContentContainer>
        <h1>Contact Me</h1>
        <div>
          {/* <a>
            <object type="image/svg+xml" data={github}>
              Your browser does not support SVG
            </object>
          </a> */}
          <a href="https://github.com" target="_blank"><Github /></a>
          <a href="http://medium.com" target="_blank"><Medium/></a>
          <a href="http://linkedin.com" target="_blank"><Linkedin/></a>
          <a href="http://gmail.com" target="_blank"><Email/></a>
        </div>
      </ContentContainer>
    </FooterContainer>
  );
};

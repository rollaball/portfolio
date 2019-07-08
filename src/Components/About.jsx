import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
const AboutContainer = styled.div`
  height: 100vh;
  position: relative;

  h1 {
    color: #fff;
    font-size: 15vh;
    text-transform: uppercase;
    padding: 0.1em 1em;
    position: absolute;
    top: 0em;
    left: 0.2em;
  }

  .rev-block {
    // position: absolute;
    color: #e7c655;
  }

  .rev-block span {
    opacity: 0;
    animation: appear-text 0.0001s linear forwards;
    animation-delay: 1.4s;
  }

  .rev-block:after {
    content: '';
    top: 0;
    left: 0;
    position: absolute;
    width: 0%;
    height: 100%;
    background: #e7c655;
    animation: rev-block 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
    animation-delay: 1s;
  }

  @keyframes rev-block {
    0% {
      left: 0;
      width: 0%;
    }
    50% {
      left: 0;
      width: 100%;
    }
    100% {
      left: 100%;
      width: 0%;
    }
  }

  @keyframes appear-text {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  #onemore {
    top: 1.2em;
    left: 0.2em;
    color: #e57155;
  }
  #twomore {
    top: 2.4em;
    left: 0.2em;
    color: #ea4c63;
  }
  #twomore span {
    animation-delay: 2.6s;
  }
  #twomore.rev-block:after {
    background: #ea4c63;
    animation-delay: 2s;
  }
  #threemore {
    top: 3.6em;
    left: 0.2em;
    font-size: ;
    color: #64d575;
  }
  #threemore span {
    animation-delay: 3.2s;
  }
  #threemore.rev-block:after {
    background: #64d575;
    animation-delay: 2.6s;
  }
  #fourmore {
    top: 7em;
    left: 2.5em;
  }

  #onemore span {
    animation-delay: 2s;
  }

  #onemore.rev-block:after {
    background: #e57155;
    animation-delay: 1.4s;
  }

  @media only screen and (max-width: 900px) {
    h1 {
      font-size: 10vh;
      padding:0.1em 0em;
      span>span {
        display: block;
      }
    }
    .rev-block {
      top: 1.6em;
    }
    #onemore{
      top: 2.8em;
    }
    #twomore{
      top: 4em;
    }
    #threemore{
      top: 5.2em;
    }
  }
`;
const Content = styled.div`
  // position: absolute;
`;
export default () => {
  return (
    <AboutContainer id="about">
      <Content>
        <h1 class="rev-block">
          <span>HELLO,</span>
        </h1>
        <h1 class="rev-block" id="onemore">
          <span>I'M</span>
        </h1>
        <h1 class="rev-block" id="twomore">
          <span>SAURABH</span>
        </h1>
        <h1 class="rev-block" id="threemore">
          <span style={{ fontSize: '0.8em' }}>
            SHETTY{' '}
            <span style={{ fontSize: '0.5em' }}>A FULLSTACK DEVELOPER</span>
          </span>
        </h1>
      </Content>
    </AboutContainer>
  );
};

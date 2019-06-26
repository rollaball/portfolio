import React from 'react';
import styled from 'styled-components';
import indigene from '../Images/indigene.png';
import moodpod from '../Images/moodpod.png';
const ProjectContainer = styled.div`
  height: 100vh;
  position: relative;
`;
const Projects = styled.div`
  margin: 13% 10%;
  width: 50%;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const Project = styled.div`
  //   background-color: #c67cf9;
  position: relative;
  .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(4, 221, 175, 0.8);
    opacity: 0;
    transition: opacity 0.6s;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;

    .tooltip {
      visibility: hidden;
      width: 15em;
      background-color: #a529fc;
      color: #fff;
      text-align: center;
      padding: 5px 10px;
      border-radius: 6px;

      /* Position the tooltip text - see examples below! */
      position: absolute;
      z-index: 100;
      left: 102%;
    }
    :hover {
      opacity: 1;
      .tooltip {
        visibility: visible;
      }
    }
    button {
      cursor: pointer;
      border: white solid 2px;
      color: white;
      background-color: rgba(0, 0, 0, 0);
      height: 90%;
      width: 80%;
      font-size: 2em;
    }
  }
`;
const ToolTip = styled.div``;
export default () => {
  return (
    <ProjectContainer id="projects">
      <h1 style={{ margin: '8% 10%', width: '50%', position: 'absolute' }}>
        Projects
      </h1>
      <Projects>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '21.7em',
            width: '22em',
            justifyContent: 'space-between'
          }}
        >
          <Project
            style={{
              height: '10em',
              backgroundSize: 'cover',
              backgroundImage: `url(${moodpod})`
            }}
          >
            <a href="https://moodpodvr.com" className="overlay">
              <button>Go To Project</button>
              <div className="tooltip">
                <h2>Moodpod</h2>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse molestie placerat sem et tristique. Fusce sit amet
                  erat et erat rutrum tempor quis eget purus. Suspendisse eu
                  hendrerit turpis, ut porttitor dui.
                </div>
              </div>
            </a>
          </Project>
          <Project style={{ height: '10em', background: `rgba(0,0,0,0.5)` }} />
        </div>
        <Project
          style={{
            width: '12em',
            backgroundSize: 'cover',
            backgroundImage: `url(${indigene})`
          }}
        >
          <a href="https://indigene.org" className="overlay">
            <button>Go To Project</button>
            <div className="tooltip">
                <h2>Moodpod</h2>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse molestie placerat sem et tristique. Fusce sit amet
                  erat et erat rutrum tempor quis eget purus. Suspendisse eu
                  hendrerit turpis, ut porttitor dui.
                </div>
              </div>
          </a>
        </Project>
      </Projects>
    </ProjectContainer>
  );
};

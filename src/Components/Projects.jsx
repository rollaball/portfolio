import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import indigene from '../Images/indigene.png';
import moodpod from '../Images/moodpod.png';
import ProjectCard from './Cards/ProjectCard';
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
const projects = [
  {
    title: 'Moodpod',
    image: moodpod,
    desc: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Suspendisse molestie placerat sem et tristique. Fusce sit
    amet erat et erat rutrum tempor quis eget purus. Suspendisse
    eu hendrerit turpis, ut porttitor dui.`,
    link: 'https://moodpodvr.com'
  },
  {
    title: 'Moodpod',
    image: moodpod,
    desc: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Suspendisse molestie placerat sem et tristique. Fusce sit
    amet erat et erat rutrum tempor quis eget purus. Suspendisse
    eu hendrerit turpis, ut porttitor dui.`,
    link: 'https://moodpodvr.com'
  },
  {
    title: 'Indigene',
    image: indigene,
    desc: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Suspendisse molestie placerat sem et tristique. Fusce sit
    amet erat et erat rutrum tempor quis eget purus. Suspendisse
    eu hendrerit turpis, ut porttitor dui.`,
    link: 'https://indigene.org'
  }
];
export default () => {
  return (
    <ScrollAnimation offset={400} animateOnce animateIn="fadeIn">
      <ProjectContainer id="projects">
        <h1
          style={{
            margin: '8% 10%',
            width: '50%',
            position: 'absolute',
            color: 'yellow'
          }}
        >
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
            <ProjectCard {...projects[0]} />
            <ProjectCard {...projects[0]} />
          </div>
          <ProjectCard {...projects[2]} isTall={true}/>
        </Projects>
      </ProjectContainer>
    </ScrollAnimation>
  );
};

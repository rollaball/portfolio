import React from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import ScrollAnimation from 'react-animate-on-scroll';
import indigene from '../Images/indigene.png';
import moodpod from '../Images/moodpod.png';
import Project from './Cards/ProjectCard';
const ProjectContainer = styled.div`
  height: 100vh;
  position: relative;
  .Overlay {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;
const Content = styled.div`
  position: absolute;
  top: 2%;
  left: 10%;
  h1 {
    font-size: 6vw;
    color: #dbafa4;
  }
  @media only screen and (max-width: 900px) {
    width: 80%;
    h1 {
      font-size: 12vw;
    }
  }
`;
const Projects = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;
const ModalContent = styled.div`
  h1 {
    font-size: 3em;
    margin-left: 1em;
  }
`;
const ModalProject = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  .projectImage {
    width: 50%;
    background-color: #dddddd;
    height: 25em;
  }
  .projectDesc {
    width: 40%;
    font-size: 1.3em;
  }
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    height: 50vh;
    .projectImage {
      width: 80%;
     
    }
    .projectDesc {
      width: 80%;
      font-size: 1em;
    }   
  }
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
class ProjectsComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    console.log('asd ');
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <ProjectContainer id="projects">
        <Content>
          <h1>PROJECTS</h1>
          <Projects>
            {projects.map(project => (
              <Project onClick={this.handleOpenModal} {...project} />
            ))}
          </Projects>
        </Content>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          className="Modal"
          overlayClassName="Overlay"
        >
          <ModalContent>
            <h1>{projects[0].title}</h1>
            <ModalProject>
              <div className="projectImage">Screenshot</div>
              <div className="projectDesc">
                <div>{projects[0].desc}</div>
                <a style={{ fontSize: '0.7em', textDecoration: 'underline' }}>Go to project</a>
              </div>
            </ModalProject>
          </ModalContent>
        </ReactModal>
      </ProjectContainer>
    );
  }
}
export default ProjectsComponent;

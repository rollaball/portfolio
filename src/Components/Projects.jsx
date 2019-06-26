import React from 'react';
import styled from 'styled-components';
const ProjectContainer = styled.div`
    height: 100vh;
    position:relative;
`;
const Projects = styled.div`
    margin: 13% 10%;
    width: 50%;
    position:absolute;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
`;
const Project = styled.div`
     background-color: grey;
`;
export default () => {
    return (
        <ProjectContainer id="projects">

        
        <h1 style={{margin: '8% 10%', width: '50%', position: 'absolute'}}>Projects</h1>
            <Projects>
                <div style={{ display: 'flex', flexDirection: 'column', height: '21.7em', width: '22em', justifyContent: 'space-between' }}>
                    <Project style={{ height: '10em' }}></Project>
                    <Project style={{ height: '10em' }}></Project>
                </div>
                <Project style={{width: '12em'}}></Project>
            </Projects>
        </ProjectContainer>
    )
}

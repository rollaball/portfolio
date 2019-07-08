import styled from "styled-components"
import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
const ProjectContainer = styled.div`
  font-family: sans-serif;
  color: #555555;
`
const TitleWithBackground = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #333333;
  color: yellow;
  h1 {
    font-size: 7em;
  }
`
const Description = styled.div`
  margin: 5em 7em;
  font-size: 2.5em;
`
const Screenshots = styled.div`
  margin: 5em 0;
  font-size: 2.5em;
  background-color: yellow;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Screenshot = styled.img`
  width: 30em;
  margin-top: 1em;
  background-color: #333333;
  background: url(${props => props.img});
`
const BackButton = styled.div`
  height: 4em;
  width: 4em;
  position: absolute;
  top: 5em;
  right: 5em;
`
const listOfProjects = [
  {
    title: "INDIGENE",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
    feugiat sem id lobortis tincidunt. Etiam ut mauris sed mauris iaculis
    laoreet. Morbi faucibus eget lectus id placerat.`,
    screenshots: [],
  },
]
const project = () => {
  return (
      <ProjectContainer>
        <ScrollAnimation animateOnce animateIn="fadeIn">
          <TitleWithBackground>
            <h1>{listOfProjects[0].title}</h1>
            
          </TitleWithBackground>
        </ScrollAnimation>
        <Description>{listOfProjects[0].description}</Description>
        <Screenshots>
          {listOfProjects[0].screenshots.map(screenshot => (
            <Screenshot src={screenshot} />
          ))}
        </Screenshots>
      </ProjectContainer>
  )
}

export default project

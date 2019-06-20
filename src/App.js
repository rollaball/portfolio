import React from 'react';
import './App.css';
import styled from 'styled-components';
import About from './Components/About';
import Blogposts from './Components/Blogposts';
import Projects from './Components/Projects';
import Header from './Components/Header';
import Footer from './Components/Footer';
const AppContainer = styled.div`
  background-color: ${props => props.color};
  color: white;
  transition: all 0.5s;
  font-family: 'Comfortaa', cursive;
`;

export default class App extends React.Component {
  state = {
    color: '#82c1eb'
  }

  listenScrollEvent = e => {
    if (window.scrollY < 400) {
      this.setState({ color: '#82c1eb' })
    } else if (window.scrollY < 1000) {
      this.setState({ color: '#04ddaf' })
    } else if (window.scrollY < 1600) {
      this.setState({ color: '#82c1eb' })
    } else if (window.scrollY < 2200) {
      this.setState({ color: '#a529fc' })
    } else {
      this.setState({ color: '#82c1eb' })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render() {
    return (
      <AppContainer color={this.state.color}>
        <Header/>
        <About />
        <Projects />
        <Blogposts />
        <Footer/>
      </AppContainer>
    );
  }
}

import axios from 'axios';
import React from 'react';
import '../../App.css';
import styled from 'styled-components';
import About from '../About';
import Blogposts from '../Blogposts';
import Projects from '../Projects';
import Header from '../Header';
import Footer from '../Footer';
const AppContainer = styled.div`
  background-color: ${props => props.color};
  color: white;
  transition: all 0.5s;
  font-family: 'Raleway', sans-serif;
`;

export default class App extends React.Component {
  state = {
    color: '#333333'
  };

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
    const userId = 'saurabh.shetty100';
    axios
      .get(
        `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${userId}`
      )
      .then(response => {
        const blogs = response.data.items.filter(
          item => item.categories.length
        );
        console.log(blogs);

        this.setState({ ...this.state, blogs });
      });
  }

  render() {
    return (
      <AppContainer color={this.state.color}>
        <Header />
        <About />
        <Projects />
        <Blogposts blogs={this.state.blogs} />
        <Footer />  
      </AppContainer>
    );
  }
}

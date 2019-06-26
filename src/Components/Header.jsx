import React from 'react';
import styled from 'styled-components';
const Header = styled.div`
transform: rotate(${props => props.rotRad || -6.98}rad);
position:fixed;
height: 25em;
width: 25em;
border-radius: 50%;
background-color: black;
right: -16%;
top: 22%;
display:flex;
flex-direction: column;
justify-content: space-around;
transition: 0.2s;
z-index:100;
border:white 5px solid
a{
    display:block;
    // background:#724aed;
    background:white;
    margin-right: 30px;
    width: 7em;
    padding: 10px;
    color: black;
    text-decoration: none;
}
`;

export default class HeaderComp extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    listenScrollEvent = e => {
        // if (window.scrollY < 400) {
        //     this.setState({ color: '#82c1eb' })
        // } else if (window.scrollY < 1000) {
        //     this.setState({ color: '#04ddaf' })
        // } else if (window.scrollY < 1600) {
        //     this.setState({ color: '#82c1eb' })
        // } else {
        //     this.setState({ color: '#a529fc' })
        // }
        // console.log(window.scrollY *);
        this.setState({ ...this.state, rotRad: -6.98 + window.scrollY / ((window.innerHeight/980)* 2030)}, () => { console.log(this.state, window.scrollY); })

    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        return (
            <Header rotRad={this.state.rotRad}>
                <a style={{ transform: 'translateX(0em) translateY(1em) rotateZ(40deg)' }} href="#about">About Me</a>
                <a style={{ transform: 'translateX(-3em) rotateZ(12deg)' }} href="#projects">Projects</a>
                <a style={{ transform: 'translateX(-3em) rotateZ(-15deg)' }} href="#blogposts">Blogposts</a>
                <a style={{ transform: 'translateX(0em) translateY(-1em) rotateZ(-44deg)' }} href="#contact">Contact Me</a>
            </Header>
        )
    }
}


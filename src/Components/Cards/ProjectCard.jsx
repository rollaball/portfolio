import React from 'react';
import styled from 'styled-components';
import folder from '../../Images/folder.svg';
const Project = styled.div`
  height: 8em;
  width: 8em;
  border-radius: 0.3em;
  // background-color: #555555;
  color: #dbafa4;
  border: 1px solid #dbafa4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-right: 1em;
  margin-bottom: 1em;
  cursor: pointer;
  transition: all 0.3s;
  :hover {
    transform: scale(1.05);
  }
  @media only screen and (max-width: 900px) {
    width: 14em;
    height: 7em;
  }
`;
const Thumbnail = styled.div`
  background: url(${folder});
  background-size: cover;
  width: 4.5em;
  height: 4.5em;
`;
const Title = styled.div``;

export default props => (
  <Project onClick={props.onClick}>
    <Thumbnail />
    <Title>{props.title}</Title>
  </Project>
);

import React from 'react';
import styled from 'styled-components';
const Project = styled.div`
  //   background-color: #c67cf9;
  position: relative;
  .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(170, 170, 0, 0.9);
    opacity: 0;
    transition: opacity 0.6s;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;

    .tooltip {
      h2 {
        color: #333333;
      }
      div {
        color: #333333;
      }
      border: solid 4px #333333;
      visibility: hidden;
      width: 15em;
      background-color: yellow;
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
export default (props) => (
  <Project
    style={{
      height: !props.isTall?'10em': 'auto',
      width: !props.isTall?'auto': '12em',
      backgroundSize: 'cover',
      backgroundImage: `url(${props.image})`
    }}
  >
    <a href={props.link} className="overlay">
      <button>Go To Project</button>
      <div className="tooltip">
        <h2>{props.title}</h2>
        <div>{props.desc}</div>
      </div>
    </a>
  </Project>
);

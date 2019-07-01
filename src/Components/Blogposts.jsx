import React from 'react';
import styled from 'styled-components';
const BlogpostContainer = styled.div`
  height: 100vh;
  position: relative;
`;
const Blogs = styled.div`
  margin: 13% 10%;
  width: 50%;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const Blog = styled.div`
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
      h2{
        color: #333333;
      }
      div{
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
const defaultBlog = {
  thumbnail: '',
  title: '',
  description: ''
};
export default props => {
  const { blogs } = props;
  const blog1 = blogs ? (blogs[0] ? blogs[0] : defaultBlog) : defaultBlog;
  const blog2 = blogs ? (blogs[1] ? blogs[1] : defaultBlog) : defaultBlog;
  const blog3 = blogs ? (blogs[2] ? blogs[2] : defaultBlog) : defaultBlog;
  console.log(blog1, blog2, blog3)
  return (
    <BlogpostContainer id="blogposts">
      <h1 style={{ margin: '8% 10%', width: '50%', position: 'absolute', color: 'yellow' }}>
        Blogposts
      </h1>
      <Blogs>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '21.7em',
            width: '22em',
            justifyContent: 'space-between'
          }}
        >
          <Blog
            style={{
              height: '10em',
              backgroundSize: 'cover',
              backgroundImage: `url(${blog1.thumbnail})`
            }}
          >
            <a href={`${blog1.link}`} className="overlay">
              <button>Go to blog</button>
              <div className="tooltip">
                <h2>{blog1.title}</h2>
                {/* <div>
                  {blog1.description}
                </div> */}
              </div>
            </a>
          </Blog>
          <Blog
            style={{
              height: '10em',
              backgroundSize: 'cover',
              backgroundImage: `url(${blog3.thumbnail})`
            }}
          >
            <a href={`${blog3.link}`} className="overlay">
              <button>Go to blog</button>
              <div className="tooltip">
                <h2>{blog3.title}</h2>
                {/* <div>
                  {blog1.description}
                </div> */}
              </div>
            </a>
          </Blog>
        </div>
        <Blog
          style={{
            width: '12em',
            backgroundSize: 'cover',
            backgroundImage: `url(${blog2.thumbnail})`
          }}
        >
          <a href={`${blog2.link}`} className="overlay">
            <button>Go To Blog</button>
            <div className="tooltip">
              <h2>{blog2.title}</h2>
            </div>
          </a>
        </Blog>
      </Blogs>
    </BlogpostContainer>
  );
};

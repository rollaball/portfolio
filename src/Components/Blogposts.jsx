import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import styled from 'styled-components';
const BlogpostContainer = styled.div`
  height: 100vh;
  position: relative;
  a {
    color: inherit;
    text-decoration: inherit;
  }
`;
const Content = styled.div`
  position: absolute;
  top: 20%;
  left: 10%;
  h1 {
    font-size: 6vw;
  }
  @media only screen and (max-width: 900px) {
    h1 {
      font-size: 10vw;
    }
    left: 4%;
    font-size:2vh;
  }
`;
const Blogs = styled.div``;
const Blog = styled.div`
  margin-bottom: 1em;
  display: flex;
  transition: all 0.3s;
  flex-direction: row;
  .image {
    height: 7em;
    width: 7em;
    background-color: rgba(255, 255, 255, 0.2);
  }
  h3 {
    margin: 0.2em 0.8em;
  }
  .desc {
    color: rgba(255, 255, 255, 0.5);
    margin: 0.2em 0.8em;
    transition: all 0.3s;
  }
  .det {
    color: rgba(255, 255, 255, 0.5);
    margin: 0.2em 0.8em;
    transition: all 0.3s;
  }
  :hover {
    transform: scale(1.03);
    .desc {
      color: rgba(255, 255, 255, 0.8);
    }
    .det {
      color: rgba(255, 255, 255, 0.8);
    }
  }
`;
const blogs = [
  {
    thumbnail: '',
    desc: 'Content written based one a research paper',
    title: 'Crash - Only software',
    date: '7th July',
    readTime: '4 mins',
    link: 'https://google.comm'
  },
  {
    thumbnail: '',
    desc: 'Content written based one a research paper',
    title: 'Crash - Only software',
    date: '7th July',
    readTime: '4 mins',
    link: 'https://google.comm'
  },
  {
    thumbnail: '',
    desc: 'Content written based one a research paper',
    title: 'Crash - Only software',
    date: '7th July',
    readTime: '4 mins',
    link: 'https://google.comm'
  }
];
export default props => {
  return (
    <BlogpostContainer id="blogposts">
      <Content>
        <h1>BLOGPOSTS</h1>
        <Blogs>
          {blogs.map(blog => (
            <a href={blog.link}>
              <Blog>
                <div className="image" />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <h3>{blog.title}</h3>
                    <h4 className="desc">{blog.desc}</h4>
                  </div>
                  <div>
                    <h4 className="det">
                      {blog.date}
                      <div>{blog.readTime}</div>
                    </h4>
                  </div>
                </div>
              </Blog>
            </a>
          ))}
        </Blogs>
      </Content>
    </BlogpostContainer>
  );
};

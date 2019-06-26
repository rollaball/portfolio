import React from 'react';
import styled from 'styled-components';
const BlogpostContainer = styled.div`
    height: 100vh;
    position:relative;
`;
const Blogs = styled.div`
    margin: 13% 10%;
    width: 50%;
    position:absolute;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
`;
const Blog = styled.div`
     background-color: grey;
`;
export default () => {
    return (
        <BlogpostContainer id="blogposts">

        
        <h1 style={{margin: '8% 10%', width: '50%', position: 'absolute'}}>Blogposts</h1>
            <Blogs>
                <div style={{ display: 'flex', flexDirection: 'column', height: '21.7em', width: '22em', justifyContent: 'space-between' }}>
                    <Blog style={{ height: '10em' }}></Blog>
                    <Blog style={{ height: '10em' }}></Blog>
                </div>
                <Blog style={{width: '12em'}}></Blog>
            </Blogs>
        </BlogpostContainer>
    )
}

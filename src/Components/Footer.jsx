import React from 'react'
import styled from 'styled-components';
const FooterContainer = styled.footer`
    height: 100vh
`;
const ContentContainer = styled.div`
    padding: 8% 10%;
`;
export default () => {
    return (
        <FooterContainer id="contact">
            <ContentContainer>
                <h1>Contact Me</h1>
            </ContentContainer>
        </FooterContainer>
    )
}

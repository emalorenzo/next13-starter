import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--background);
  color: var(--color);
`;

const Content = styled.div`
  flex: 1;
`;

const Footer = styled.footer`
  background-color: var(--primary-color);
  color: var(--color);
  padding: 32px;
`;

export const Layout = ({ children }) => {
  return (
    <Wrapper>
      {/* <Header scroll={scrollYProgress} /> */}
      <Content>{children}</Content>
      {/* <Footer>Ema Lorenzo</Footer> */}
    </Wrapper>
  );
};

import React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';

import { Head } from '@/components';

const Wrapper = styled.main`
  display: grid;
  place-items: center;
  height: 100%;
`;

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Head />
      <h1>Next Complete Starter ⚡</h1>
    </Wrapper>
  );
};

export default Home;

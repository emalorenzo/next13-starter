import React from 'react';
import styled from 'styled-components';

import { Head } from '@/components';
import { MainLayout } from '@/layouts';
import type { NextPageWithLayout } from '@/types';

const Wrapper = styled.main`
  display: grid;
  place-items: center;
  height: 100%;
`;

const HomePage: NextPageWithLayout = () => {
  return (
    <Wrapper>
      <Head />
      <h1>Next Starter ⚡</h1>
    </Wrapper>
  );
};

HomePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default HomePage;

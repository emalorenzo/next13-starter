import React from 'react';
import styled from 'styled-components';

import { Head } from '@/components';
import { MainLayout } from '@/layouts';
import { theme } from '@/styles';
import type { NextPageWithLayout } from '@/types';

const Wrapper = styled.main`
  display: grid;
  place-items: center;
  height: 100%;

  @media ${theme.queries.smallTabletAndUp} {
    background-color: ${theme.colors.brand.accent};
  }
`;

const HomePage: NextPageWithLayout = () => {
  console.log('theme', theme);
  return (
    <Wrapper>
      <Head />
      <h1 className="bg-brand-main">Next Starter ⚡</h1>
    </Wrapper>
  );
};

HomePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default HomePage;

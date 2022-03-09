import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';
import React from 'react';
import styled from 'styled-components';

import { Head } from '@/components';
import { MainLayout } from '@/layouts';

const Wrapper = styled.main`
  display: grid;
  place-items: center;
  height: 100%;
`;

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const HomePage: NextPageWithLayout = () => {
  return (
    <Wrapper>
      <Head />
      <h1>Next Complete Starter ⚡</h1>
    </Wrapper>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default HomePage;

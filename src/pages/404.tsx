import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

import { MainLayout } from '@/layouts';
import type { NextPageWithLayout } from '@/types';

const Wrapper = styled.main`
  height: 100%;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 1rem;

  a {
    color: var(--text-color);
  }
`;

const ErrorPage: NextPageWithLayout = () => {
  return (
    <Wrapper>
      <Head>
        <title>Next Starter</title>
      </Head>

      <h1>There is no content here</h1>
      <Link href="/" passHref>
        <a>Go back to home</a>
      </Link>
    </Wrapper>
  );
};

ErrorPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default ErrorPage;

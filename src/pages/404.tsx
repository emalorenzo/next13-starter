import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

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

const ErrorPage: NextPage = () => {
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

export default ErrorPage;

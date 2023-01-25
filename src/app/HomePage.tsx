'use client';

import styled from 'styled-components';

import { theme } from '@/styles';

const Wrapper = styled.main`
  display: grid;
  place-items: center;
  height: 100%;

  @media ${theme.queries.smallTabletAndUp} {
    background-color: ${theme.colors.red[500]};
  }
`;

export default function HomePage() {
  return (
    <Wrapper>
      {/* <Head /> */}
      <h1 className="bg-brand-main">Next Starter ⚡</h1>
    </Wrapper>
  );
}

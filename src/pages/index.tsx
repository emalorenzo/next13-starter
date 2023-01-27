import styled from 'styled-components';

import { MainLayout } from '@/layouts';
import { theme } from '@/styles';

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  height: 100%;

  @media ${theme.queries.smallTabletAndUp} {
    background-color: ${theme.colors.red[500]};
  }
`;

export default function HomePage() {
  return (
    <MainLayout>
      <Wrapper>
        <h1 className="bg-brand-main">Next Starter ⚡</h1>
      </Wrapper>
    </MainLayout>
  );
}

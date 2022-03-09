import styled from 'styled-components';

import { COLORS } from '@/theme';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--background);
`;

export const Content = styled.main`
  flex: 1;
`;

export const Footer = styled.footer`
  background-color: var(--foreground);
  border-top: 1px solid hsl(${COLORS.backgroundHue} 10% 80%);
  color: var(--color);
  padding: 2rem;
  display: flex;
  justify-content: flex-end;
`;

export const LinkButton = styled.a`
  display: inline-block;
  display: flex;
  gap: 0.5em;
  text-decoration: none;
  color: var(--text-color);
  padding: 0.5em 1em;
  border-radius: 8px;
  transition: background-color 0.2s ease-in-out;
  will-change: background-color;

  &:hover {
    background-color: var(--background-active);
  }

  &:focus,
  &:active {
    outline: 1px solid hsl(${COLORS.backgroundHue} 10% 80%);
  }
`;

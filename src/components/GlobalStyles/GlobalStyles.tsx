import { createGlobalStyle } from 'styled-components';

import { COLORS } from '@/theme';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: hsl(${COLORS.primaryHue} 100% 80%);
    --background: hsl(${COLORS.backgroundHue} 0% 100%);
    --foreground: hsl(${COLORS.backgroundHue} 0% 90%);
    --text-color: hsl(${COLORS.textHue} 0% 8%);
    --background-active: hsl(${COLORS.backgroundHue} 10% 80%);
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --primary-color: hsl(${COLORS.primaryHue} 100% 50%);
      --background: hsl(${COLORS.backgroundHue} 0% 8%);
      --foreground: hsl(${COLORS.backgroundHue} 0% 0%);
      --text-color: hsl(${COLORS.backgroundHue} 0% 100%);
      --background-active: hsl(${COLORS.backgroundHue} 10% 10%);
    }
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html, body {
    height: 100%;
    scroll-behavior: smooth;
    background-color: var(--background);
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-family: 'Poppins', sans-serif;
    color: var(--text-color);
    accent-color: var(--primary-color);
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  
  #root, #__next {
    isolation: isolate;
    height: 100%;
  }
`;

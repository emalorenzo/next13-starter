import NextHead from 'next/head';

export const Head = () => (
  <NextHead>
    <title>Ema Lorenzo</title>
    <meta
      name="description"
      content="👋 Hi! I'm Ema, a Frontend Developer with infinite curiosity in the search for more beauty on the web."
    />
    <meta
      name="keywords"
      content="creative, developer, frontend, tech, art, react"
    />
    <meta name="author" content="Emanuel Lorenzo" />
    <meta name="robots" content="follow, index" />
    <meta property="og:title" content="Ema Lorenzo: Creative Developer" />
    <meta
      property="og:description"
      content="👋 Hi! I'm Ema, a Frontend Developer with infinite curiosity in the search for more beauty on the web. Here I share about React, CSS, Three.js and more."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://emalorenzo.com/" />
    <meta property="og:image" content="https://emalorenzo.com/images/og.png" />
  </NextHead>
);

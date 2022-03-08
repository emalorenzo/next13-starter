import type { AppProps } from 'next/app';

import { Layout, GlobalStyles } from '@/components';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyles />
    </>
  );
};

export default App;

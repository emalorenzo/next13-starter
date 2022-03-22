import { GlobalStyles } from '@/components';
import type { AppPropsWithLayout } from '@/types';

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
};

export default App;

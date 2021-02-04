import Router from 'next/router';
import Nprogress from 'nprogress';
// TODO: Swap with our own
import '../components/styles/nprogress.css';

import Page from '../components/Page';

Router.events.on('routeChangeStart', () => Nprogress.start());
Router.events.on('routeChangeComplete', () => Nprogress.done());
Router.events.on('routeChangeError', () => Nprogress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

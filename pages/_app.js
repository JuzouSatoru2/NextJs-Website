import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';

Router.events.on('routeChangeStart', () => {
  NProgress.start()
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="stylesheet" type="text/css" href="/static/css/nprogress.min.css" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
};
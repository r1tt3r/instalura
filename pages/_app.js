/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import React from 'react';
import PropTypes from 'prop-types';
import '../src/theme/GlobalStyles/instagram.css';
import '../src/theme/GlobalStyles/flickity.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Instalura - Projeto</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
App.defaultProps = {
  Component: '',
  pageProps: '',
};

App.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  Component: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.any,
};

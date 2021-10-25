import React from 'react';

import {AppProps} from 'next/app';

import reduxWrapper from 'store';

import useResponsive from 'hooks/use-responsive';

import 'styles/normalize.scss';

//------------------------------------------------------------------------------

function App(props: AppProps) {
  const {
    Component,
    pageProps,
  } = props;

  useResponsive();

  return <Component {...pageProps} />;
}

//------------------------------------------------------------------------------

export default reduxWrapper.withRedux(App);

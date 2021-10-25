import React from 'react';

import {AppProps} from 'next/app';

import reduxWrapper from 'store';

import 'styles/normalize.scss';

//------------------------------------------------------------------------------

function App(props: AppProps) {
  const {
    Component,
    pageProps,
  } = props;

  return <Component {...pageProps} />;
}

//------------------------------------------------------------------------------

export default reduxWrapper.withRedux(App);

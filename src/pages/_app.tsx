import React from 'react';

import {AppProps} from 'next/app';

import reduxWrapper from 'store';

import useResponsive from 'hooks/use-responsive';
import useGallery from 'hooks/use-gallery';
import useNoOverflow from 'hooks/use-no-overflow';
import useScrollReset from 'hooks/use-scroll-reset';

import 'styles/normalize.scss';

//------------------------------------------------------------------------------

function App(props: AppProps) {
  const {
    Component,
    pageProps,
  } = props;

  const {gallery} = pageProps;

  useResponsive();
  useGallery(gallery);
  useNoOverflow();
  useScrollReset();

  return <Component {...pageProps} />;
}

//------------------------------------------------------------------------------

export default reduxWrapper.withRedux(App);

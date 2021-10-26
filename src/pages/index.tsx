import React from 'react';
import {NextPage} from 'next';

import reduxWrapper from 'store';

import Head from 'elements/complex/page-head';
import Main from 'elements/complex/page-main';

import getGallery from 'utility/get-gallery';

//------------------------------------------------------------------------------

const Index: NextPage = () => {
  return (
    <>
      <Head />
      <Main />
    </>
  );
}

//------------------------------------------------------------------------------

export const getStaticProps = reduxWrapper.getStaticProps(async () => {
  const gallery = await getGallery();

  return {
    props: {
      gallery,
    },
  };
});

//------------------------------------------------------------------------------

export default Index;

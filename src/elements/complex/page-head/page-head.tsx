//------------------------------------------------------------------------------
// This component contains the head meta tags and SEO configuration
//------------------------------------------------------------------------------

import React from 'react';
import NextHead from 'next/head';

import {env, fontUrl} from 'configs';

//------------------------------------------------------------------------------

const Head: React.FC = () => {
  const metaTitle = 'Photographer Gallery';
  const metaDesc = 'A minimal, ready to use gallery template for photographers \
who are looking to expand their reach into the digital world';
  const metaImage = `${env.host}/img/logos/logo-full.jpg`;

  return (
    <NextHead>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='theme-color' content='#FFFFFF' />
      <meta name='description' content={metaDesc} />
      <meta itemProp='name' content={metaTitle} />
      <meta itemProp='description' content={metaDesc} />
      <meta itemProp='image' content={metaImage} />
      <meta property='og:url' content={env.host} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={metaTitle} />
      <meta property='og:description' content={metaDesc} />
      <meta property='og:image' content={metaImage} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={metaTitle} />
      <meta name='twitter:description' content={metaDesc} />
      <meta name='twitter:image' content={metaImage} />
      <link rel='stylesheet' href={fontUrl} />
      <link
        rel='shortcut icon'
        type='image/png'
        href={`${env.host}/img/logos/logo192.png`}
      />
      <link
        rel='apple-touch-icon'
        href={`${env.host}/img/logos/logo192.png`}
      />
      <link rel='manifest' href={`${env.host}/manifest.json`} />
      <title>{metaTitle}</title>
    </NextHead>
  );
}

//------------------------------------------------------------------------------

export default Head;

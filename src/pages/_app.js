import React from 'react';
import '../i18n';
import '../styles/index.css';
import Head from 'next/head';

function SEO() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href="DeveloperDaoFavicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="A community of builders who believe in collective ownership of the internet."
      />
      {/* Primary Meta Tags */}
      <title>Developer DAO</title>
      <meta name="title" content="Developer DAO" />
      <meta
        name="description"
        content="A community of builders who believe in collective ownership of the internet."
      />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.developerdao.com/" />
      <meta property="og:title" content="Developer DAO" />
      <meta
        property="og:description"
        content="A community of builders who believe in collective ownership of the internet."
      />
      <meta property="og:image" content="social-banner.png" />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.developerdao.com/" />
      <meta property="twitter:title" content="Developer DAO" />
      <meta
        property="twitter:description"
        content="A community of builders who believe in collective ownership of the internet."
      />
      <meta property="twitter:image" content="social-banner.png" />
      {/* Favicon Images */}
      <link rel="apple-touch-icon" href="logo192.png" />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="57x57"
        href="apple-touch-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="114x114"
        href="apple-touch-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="72x72"
        href="apple-touch-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="144x144"
        href="apple-touch-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="60x60"
        href="apple-touch-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="120x120"
        href="apple-touch-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="76x76"
        href="apple-touch-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="152x152"
        href="apple-touch-icon-152x152.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="favicon-196x196.png"
        sizes="196x196"
      />
      <link
        rel="icon"
        type="image/png"
        href="favicon-96x96.png"
        sizes="96x96"
      />
      <link
        rel="icon"
        type="image/png"
        href="favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="favicon-16x16.png"
        sizes="16x16"
      />
      <link
        rel="icon"
        type="image/png"
        href="favicon-128.png"
        sizes="128x128"
      />
      <meta name="application-name" content=" " />
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta name="msapplication-TileImage" content="mstile-144x144.png" />
      <meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
      <meta
        name="msapplication-square150x150logo"
        content="mstile-150x150.png"
      />
      <meta name="msapplication-wide310x150logo" content="mstile-310x150.png" />
      <meta
        name="msapplication-square310x310logo"
        content="mstile-310x310.png"
      />
      {/*
manifest.json provides metadata used when your web app is installed on a
user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    */}
      <link rel="manifest" href="manifest.json" />
    </Head>
  );
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <SEO />
      <Component {...pageProps} />
    </>
  );
}

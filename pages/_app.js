import { Fragment } from "react";
import Head from "next/head";
import Navigation from "../components/Navigation/Navigation";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Ongle Chic</title>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
      </Head>
      <main>
        <Component {...pageProps} />
        <Navigation />
      </main>
    </Fragment>
  );
}

export default MyApp;

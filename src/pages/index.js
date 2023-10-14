import Head from "next/head";

import { Header } from "components/Header";
import { Features } from "components/Features";
import { Hero } from "components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mineiríssimo</title>
        <meta
          name="description"
          content="a landing page of the Mineiríssimo brazilian cheese bread store"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicons/logo_nova.ico" />
      </Head>
      <Header />
      <main>
        <Features />
        <Hero />
      </main>
    </>
  );
}

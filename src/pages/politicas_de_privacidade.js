import Head from "next/head";

import { Header } from "components/Header";
import { _PrivacyPolicy } from "components/PrivacyPolicy";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Mineiríssimo</title>
        <meta
          name="description"
          content="Page of privacy policy of the Mineiríssimo brazilian cheese bread store"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicons/logo_nova.ico" />
      </Head>
      <main>
        <Header />
        <_PrivacyPolicy />
      </main>
    </>
  );
}

import Head from "next/head";

import { Header } from "components/Header";
import { _TermsAndConditions } from "components/TermsAndConditions";

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Mineiríssimo</title>
        <meta
          name="description"
          content="Page of terms and conditions of the Mineiríssimo brazilian cheese bread store"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicons/logo_nova.ico" />
      </Head>
      <main>
        <Header dark={"active"} size={"large"} />
        <_TermsAndConditions />
      </main>
    </>
  );
}

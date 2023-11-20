import Head from "next/head";
import Link from "next/link";

import { Header } from "components/Header";

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
        <h1>Aqui desenvolva a página de política de privacidade</h1>
        <Link href="/">
          <button>Voltar</button>
        </Link>
      </main>
    </>
  );
}

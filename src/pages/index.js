import Head from "next/head";

import { Header } from "components/Header";
import { Features } from "components/Features";
import { Hero } from "components/Hero";
import { Products } from "components/Products";
import { About } from "components/About";
import { Testimonials } from "components/Testimonials";
import { Innovations } from "components/Innovations";
import { Events } from "components/Events";
import { Contact } from "components/Contact";
import { Footer } from "components/Footer";
import { ScrollToTopButton } from "components/Buttons/scrollToTopButton";

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
        <Hero />
        <Features />
        <Products />
        <About />
        <Testimonials />
        <Innovations />
        <Events />
        <Contact />
        <Footer />
        <ScrollToTopButton />
      </main>
    </>
  );
}

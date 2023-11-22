import React, { Component } from "react";
import Image from "next/image";

import ilustrationHero from "../../assets/images/ilustration-hero.png";
import { PrimaryButton } from "components/Buttons";

import { BsWhatsapp } from "react-icons/bs";

import styles from "./hero.module.scss";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h4 className={styles.title}>boas-vindas ao mineiríssimo</h4>
          <h1 className={styles.headline}>O legítimo sabor do pão de queijo</h1>
          <p className={styles.paragraph}>
            Há mais de 10 anos fabricando o autêntico pão de queijo mineiro.
            Venha conhecer, você não vai se arrepender!
          </p>
          <a href={"/#contato"}>
            <PrimaryButton className={styles.button} size="large">
              <BsWhatsapp />
              faça se pedido
            </PrimaryButton>
          </a>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={ilustrationHero}
            alt="Imagem de uma sexta com pães de queijo"
          />
        </div>
      </div>
    </section>
  );
}

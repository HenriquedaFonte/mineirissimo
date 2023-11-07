import Image from "next/image";

import ilustrationAbout from "../../assets/images/ilustration-about.png";

import styles from "./about.module.scss";

export function About() {
  return (
    <section className={styles.about} id="sobre">
      <h4 className={styles.title}>Sobre nós</h4>
      <h1 className={styles.headline}>
        Entenda quem somos e por que existimos
      </h1>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={
              ilustrationAbout
            } /* Alterar essa imagem para outra (com a equipe em frente da fábrica, por exemplo) na posição vertical */
            alt="Imagem de um sanduiche recheado com salame."
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <p className={styles.paragraph}>
            Somos uma empresa artesanal de pão de queijo e temos uma variedade
            de outros produtos feitos, todos, a partir da massa do pão de
            queijo. Nossas receitas não utilizam nenhum ingrediente químico ou
            produtos que realcem o sabor. E também, não utilizamos ovo em pó,
            pois consideramos de fundamental importância o efeito que somente o
            ovo in natura proporciona no resultado final. A cocção dos produtos
            pré-assados é feita de forma lenta e gradativa, deixando-os assim,
            macio por dentro e crocante por fora.
            <br /> <br />
            {""}
            Existimos como uma alternativa para aqueles que estão saturados do
            mercado de pão de queijo industrializado e que buscam um sabor
            verdadeiro com uma receita caseira.
          </p>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

import coxinha from "../../assets/images/coxinha.png";
import pizza from "../../assets/images/pizza.png";
import crostata from "../../assets/images/crostata.png";

import { AnimatedElement } from "utils/animations";

import styles from "./innovations.module.scss";

export function Innovations() {
  return (
    <section className={styles.innovations} id="inovacoes">
      <div className={styles.container}>
        <AnimatedElement element="header">
          <h4 className={styles.title}>inovações</h4>
          <h1 className={styles.headline}>
            O mundo do pão de queijo fora da caixinha
          </h1>
        </AnimatedElement>

        <AnimatedElement element="div" className={styles.content}>
          <p className={styles.paragraph}>
            Imagine um mundo mágico do pão de queijo, onde você poderia se
            deliciar com vários produtos com a base da massa de pão de queijo
            mais gostosa do Brasil. Conheça alguns produtos revolucionários
            criados pela mineiríssimo:
          </p>
        </AnimatedElement>

        <AnimatedElement element="ul" className={styles.imagesGalery}>
          <li className={`${styles.imageContainer} col-4`}>
            <span className={styles.imageTitle}>Coxinha de frango</span>
            <Image
              className={styles.image}
              src={coxinha}
              alt="Imagem de seis coxinhas de pão de queijo"
            />
          </li>
          <li className={`${styles.imageContainer} col-4`}>
            <span className={styles.imageTitle}>Pizza</span>
            <Image
              className={styles.image}
              src={pizza}
              alt="Imagem de uma pizza de pão de queijo"
            />
          </li>
          <li className={`${styles.imageContainer} col-4`}>
            <span className={styles.imageTitle}>Crostata</span>
            <Image
              className={styles.image}
              src={crostata}
              alt="Imagem de duas crostatas"
            />
          </li>
        </AnimatedElement>

        <AnimatedElement element="div" className={styles.information}>
          <h2 className={styles.blink}>IMPORTANTE!!!</h2>
          <p className={styles.informationContent}>
            Com o passar dos anos nos deparamos cada vez mais com um público
            especial, os <span>Celíacos</span>. O pão de queijo de verdade não
            leva nenhum tipo de farinha, e por isso, naturalmente,{" "}
            <span>NÃO CONTÉM GLÚTEN</span>. Quando começamos a fazer produtos
            diferenciados, porém com a massa de pão de queijo, sabíamos que
            seríamos procurados por pessoas com intolerância ou alergia a
            glúten. A partir disso, iniciamos todo um cuidado com outros
            ingredientes, como por exemplo o molho da pizza ou os temperos do
            frango da coxinha. E daí em diante, nada que contenha farinha entra
            na nossa cozinha. Portanto,{" "}
            <span>garantimos não haver risco de contaminação cruzada</span>,
            tranquilizando assim até mesmo os celíacos mais graves.
          </p>
        </AnimatedElement>
      </div>
    </section>
  );
}

import Image from "next/image";

import ilustrationEvents from "../../assets/images/ilustration-events.png";

import styles from "./events.module.scss";

export function Events() {
  return (
    <section className={styles.events} id="eventos">
      <h4 className={styles.title}>eventos</h4>
      <h1 className={styles.headline}>Participações em eventos</h1>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={ilustrationEvents}
            alt="Imagem de um stand de feira"
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <p className={styles.paragraph}>
            Nossa primeira participação em eventos, foi incrível e desafiador,
            imaginamos uma demanda mas fomos surpreendidos com a alta procura do
            nosso pão de queijo, passamos sufoco no primeiro dia e isso nos
            preparou o que viria no dia seguinte, convocamos todos nossos
            colaboradores e conseguimos atender a todos os clientes. A partir
            desse dia, decidimos que fariamos parte de toda feira em Recife
            Porém isso em nada impediu nosso sonho, continuamos investindo em
            participações em eventos regionais.
          </p>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { motion } from "framer-motion";

import ilustrationEvents from "../../assets/images/ilustration-events.png";

import styles from "./events.module.scss";

const parent = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1 } },
};

export function Events() {
  return (
    <motion.section
      className={styles.events}
      id="eventos"
      variants={parent}
      initial="hidden"
      whileInView="visible"
      onReset={true}
    >
      <h4 className={styles.title}>eventos</h4>
      <h1 className={styles.headline}>Participações em eventos</h1>
      <motion.div
        className={styles.container}
        variants={parent}
        initial="hidden"
        whileInView="visible"
        onReset={true}
      >
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
      </motion.div>
    </motion.section>
  );
}

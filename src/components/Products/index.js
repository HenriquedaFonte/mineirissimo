import Image from "next/image";
import { Swiper } from "swiper/react";
import { motion } from "framer-motion";

import ilustrationProducts from "../../assets/images/ilustration-products.png";
import { ProductsCards } from "components/ProductsCard";

import styles from "./products.module.scss";

const parent = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1 } },
};

export function Products() {
  return (
    <motion.section
      className={styles.products}
      id="produtos"
      variants={parent}
      initial="hidden"
      whileInView="visible"
    >
      <h4 className={styles.title}>Produtos</h4>
      <h1 className={styles.headline}>
        Apresentamos alguns de nosso produtos mais vendidos
      </h1>

      <motion.div
        className={styles.presentation}
        variants={parent}
        initial="hidden"
        whileInView="visible"
      >
        <div className={styles.content}>
          <h3 className={styles.contentTitle}>
            Nossa principal estrela, o pão de queijo!
          </h3>
          <p className={styles.paragraph}>
            A receita é um segredinho que nossas avós já sabiam. Manuseavam
            corretamente os ingredientes em porções generosas que, levadas ao
            forno, recebiam o toque mágico da transformação. Retirados, já
            crescidos, cheirosos e quentinhos, eram servidos com um delicioso
            café. O que procuramos fazer, é um resgate dessa época. Um tempo que
            não faz tanto tempo assim. E o principal, fazemos com todo
            carinho,amor e alegria, como nossas vovós nos ensinaram. Como todos
            os nossos produtos, nosso pão de queijo não leva farinha e é{" "}
            <span className={styles.highlights}>100% sem glúten.</span>
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={ilustrationProducts}
            alt="Imagem com dois pães de queijos em cima de um prato"
          />
        </div>
      </motion.div>

      <motion.div variants={parent} initial="hidden" whileInView="visible">
        <Swiper id="productList" className={styles.productList}>
          <ProductsCards />
        </Swiper>
      </motion.div>
    </motion.section>
  );
}

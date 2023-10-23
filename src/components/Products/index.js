import Image from "next/image";
import { GrPrevious, GrNext } from "react-icons/gr";

import { scrollLeftProducts, scrollRightProducts } from "utils/listScroll";

import ilustrationProducts from "../../assets/images/ilustration-products.png";
import { ProductsCards } from "components/ProductsCard";

import styles from "./products.module.scss";

export function Products() {
  return (
    <section className={styles.products} id="produtos">
      <h4 className={styles.title}>Produtos</h4>
      <h1 className={styles.headline}>
        Apresentamos alguns de nosso produtos mais vendidos
      </h1>

      <div className={styles.presentation}>
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
      </div>

      <div className={styles.listContainer}>
        <GrPrevious
          className={styles.button}
          type="button"
          onClick={() => scrollLeftProducts()}
        ></GrPrevious>

        <ul
          className={`${styles.list} row row-cols-1 row-cols-md-3 g-4`}
          id="list"
        >
          <ProductsCards />
        </ul>

        <GrNext
          className={styles.button}
          type="button"
          onClick={() => scrollRightProducts()}
        ></GrNext>
      </div>
    </section>
  );
}

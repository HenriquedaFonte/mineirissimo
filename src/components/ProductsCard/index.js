import Image from "next/image";

import { productsData } from "database";

import styles from "./productsCards.module.scss";

export function ProductsCards() {
  return (
    <>
      {productsData.map((product) => (
        <li className={`${styles.card} col`} key={product.id}>
          <div className={`${styles.imageContainer} h-100`}>
            <Image
              src={product.img}
              className={styles.image}
              alt={`Imagem de ${product.name}`}
            />
          </div>
          <div className={styles.cardBody}>
            <h5 className={styles.title}>{product.name}</h5>
            <p className={styles.content}>{product.info}</p>
          </div>
        </li>
      ))}
    </>
  );
}

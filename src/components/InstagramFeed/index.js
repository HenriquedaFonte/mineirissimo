import Image from "next/image";

import styles from "./instagramFeed.module.scss";

import instaProdutos from "../../assets/icons/instaProdutos.png";
import instaBaguete from "../../assets/icons/instaBaguete.png";
import instaPizza from "../../assets/icons/instaPizza.png";
import instaCrostata from "../../assets/icons/instaCrostata.png";

export function InstagramFeed() {
  return (
    <ul className={styles.thumbnails}>
      <li className={styles.thumbnail}>
        <Image
          className={styles.image}
          src={instaProdutos}
          alt="Fotos de produtos da Mineiríssimo"
        />
      </li>
      <li className={styles.thumbnail}>
        <Image
          className={styles.image}
          src={instaPizza}
          alt="Fotos de produtos da Mineiríssimo"
        />
      </li>
      <li className={styles.thumbnail}>
        <Image
          className={styles.image}
          src={instaBaguete}
          alt="Fotos de produtos da Mineiríssimo"
        />
      </li>
      <li className={styles.thumbnail}>
        <Image
          className={styles.image}
          src={instaCrostata}
          alt="Fotos de produtos da Mineiríssimo"
        />
      </li>
    </ul>
  );
}

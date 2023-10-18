import styles from "./features.module.scss";

export function Features() {
  return (
    <section className={styles.features}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <h4 className={styles.title}>+ 30.000</h4>
          <span className={styles.content}>
            Pães de queijo vendidos por mês
          </span>
        </li>
        <li className={styles.item}>
          <h4 className={styles.title}>+ 15</h4>
          <span className={styles.content}>Produtos derivados</span>
        </li>
        <li className={styles.item}>
          <h4 className={styles.title}>+ 10</h4>
          <span className={styles.content}>Anos no mercado</span>
        </li>
      </ul>
    </section>
  );
}

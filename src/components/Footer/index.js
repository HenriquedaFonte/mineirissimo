import styles from "./footer.module.scss";

import {
  IoLogoInstagram,
  IoMailOutline,
  IoLocationOutline,
} from "react-icons/io5";

import { InstagramFeed } from "components/InstagramFeed";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={`${styles.content} col-3`}>
          <header className={styles.instagram}>
            <IoLogoInstagram className={styles.logoInstagram} />
            <h5 className={styles.contentTitle}>Instagram</h5>
          </header>
          <ul className={styles.socialLinksList}>
            <li className={styles.sociaLlink}>
              <a
                target="_blank"
                href="http://instagram.com/mineirissimo.recife"
              >
                <InstagramFeed />
              </a>
            </li>
          </ul>
        </div>

        <div className={`${styles.content} col-3`}>
          <h5 className={styles.contentTitle}>Informações</h5>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a href="/politica_de_privacidade">Política de privacidades</a>
            </li>
            <li className={styles.item}>
              <a href="/termos_e_condicoes">Termos e condições</a>
            </li>
          </ul>
        </div>

        <div className={`${styles.content} col-4`}>
          <h5 className={styles.contentTitle}>Sobre</h5>
          <ul className={styles.list}>
            <li className={styles.item}>
              <IoLocationOutline />
              R. Sergio Magalhães, 54 Graças Recife-PE
            </li>

            <li className={styles.item}>
              <a href="mailto:mineirissimoartesanal@gmail.com" target="_blank">
                <IoMailOutline />
                mineirissimoartesanal@gmail.com
              </a>
            </li>

            <li className={styles.item}>Telefone: (81)9.9627-2423</li>
          </ul>
        </div>
      </div>

      <div className={styles.contentRights}>
        <p>©2010 Mineirissimo. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

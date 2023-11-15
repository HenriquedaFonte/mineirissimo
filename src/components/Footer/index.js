import Image from "next/image";
import styles from "./footer.module.scss";

import { IoLogoInstagram, IoMailOutline } from "react-icons/io5";
import { FiFacebook } from "react-icons/fi";

import Logo from "../../assets/icons/logo.png";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div class={`${styles.content} col-3`}>
          <header className={styles.logoContainer}>
            <Image
              className={styles.logo}
              src={Logo}
              alt="Logotipo da Mineiríssimo"
            />
          </header>
          <div className={styles.rights}>
            <p>©2010 Mineirissimo.</p>
            <p>Todos os direitos reservados.</p>
          </div>
        </div>
        <div class={`${styles.content} col-3`}>
          <h5 className={styles.contentTitle}>Mídia</h5>
          <ul className={styles.linksList}>
            <li className={styles.link}>
              <a
                target="_blank"
                href="http://instagram.com/mineirissimo.recife"
              >
                <IoLogoInstagram />
              </a>
            </li>
            <li className={styles.link}>
              <a target="_blank" href="http://facebook.com/mineirissimo.recife">
                <FiFacebook />
              </a>
            </li>
          </ul>
        </div>
        <div class={`${styles.content} col-3`}>
          <h5 className={styles.contentTitle}>Contato</h5>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <a
                className={styles.mail}
                href="mailto:mineirissimoartesanal@gmail.com"
                target="_blank"
              >
                <IoMailOutline />
                mineirissimoartesanal@gmail.com
              </a>
            </li>

            <li className={styles.contactItem}>Telefone: (81)9.9627-2423</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

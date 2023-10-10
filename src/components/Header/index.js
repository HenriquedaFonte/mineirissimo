import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

import Logo from "../../assets/icons/logo.png";
import styles from "./header.module.scss";
import { PrimaryButton } from "components/Buttons";

export function Header() {
  const [active, setActive] = useState(false);

  return (
    <div className={`${styles.header} container`}>
      <div className={`${styles.navbarContainer} row align-items-center`}>
        <Link className={styles.headerLogoContainer} href={"/"}>
          <Image
            className={styles.logo}
            src={Logo}
            alt="logo da Mineirissimo"
          />
        </Link>

        <nav className={styles.nav} id="nav">
          <RxHamburgerMenu
            className={styles.hamburguerIcon}
            onClick={() => setActive(!active)}
          />

          <ul className={active ? styles.navbarActive : styles.navbar}>
            <li className={styles.navbarItem}>
              <a className={styles.navbarContent} href={"/#inicio"}>
                Início
              </a>
            </li>

            <li className={styles.navbarItem}>
              <a className={styles.navbarContent} href={"/#produtos"}>
                Produtos
              </a>
            </li>

            <li className={styles.navbarItem}>
              <a className={styles.navbarContent} href={"/#sobre"}>
                Sobre
              </a>
            </li>

            <li className={styles.navbarItem}>
              <a className={styles.navbarContent} href={"/#depoimentos"}>
                Depoimentos
              </a>
            </li>

            <li className={styles.navbarItem}>
              <a className={styles.navbarContent} href={"/#inovacoes"}>
                Inovações
              </a>
            </li>

            <li className={styles.navbarItem}>
              <a className={styles.navbarContent} href={"/#eventos"}>
                Eventos
              </a>
            </li>
          </ul>
        </nav>
        <PrimaryButton className={styles.headerButton} size="small">
          Fale conosco
        </PrimaryButton>
      </div>
    </div>
  );
}

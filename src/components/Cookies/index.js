import { useState, useEffect } from "react";
import Image from "next/image";
import { setCookie, parseCookies } from "nookies";

import cookieIcon from "../../assets/icons/cookie.png";

import { AnimatedElement } from "utils/animations";

import styles from "./cookies.module.scss";

export function CookieBanner(props) {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookiesAccepted = parseCookies(null, props.ACCEPTED_COOKIES);

    if (cookiesAccepted.ACCEPTED_COOKIES === "false") {
      const delayToShowBanner = setTimeout(() => {
        setShowBanner(true);
      }, 3000);
      return () => clearTimeout(delayToShowBanner);
    }
  }, [props.ACCEPTED_COOKIES]);

  const handleOptionsCookies = (option) => {
    if (option === "true") {
      setCookie(null, "ACCEPTED_COOKIES", "true", {
        maxAge: 30 * 24 * 60 * 60,
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        sameSite: true,
        path: "/",
      });

      setShowBanner(false);
    } else {
      setCookie(null, "ACCEPTED_COOKIES", "false", {
        maxAge: 30 * 24 * 60 * 60,
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        sameSite: true,
        path: "/",
      });

      setShowBanner(false);
    }
  };

  return (
    showBanner && (
      <AnimatedElement element="div" className={styles.container}>
        <header className={styles.header}>
          <Image
            className={styles.icon}
            src={cookieIcon}
            alt="Um desenho de um cookie mordido"
          />
          <h5 className={styles.title}>Nós valorizamos sua privacidade</h5>
        </header>
        <p className={styles.paragraph}>
          <strong>
            Este site usa cookies para oferecer a você uma experiência
            aprimorada.
          </strong>
          <br />
          Nós coletamos informações sobre como você interage com o nosso site
          para fornecer serviços personalizados a você
        </p>
        <p className={styles.paragraph}>
          Para saber mais, acesse {""}
          <a
            className={styles.link}
            href={"/politicas_de_privacidade"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Políticas de Privacidade
          </a>
        </p>
        <div className={styles.buttonContainer}>
          <button
            className={styles.button}
            onClick={() => handleOptionsCookies("true")}
          >
            Aceito
          </button>
          <button
            className={styles.button}
            onClick={() => handleOptionsCookies("false")}
          >
            Não, obrigado
          </button>
        </div>
      </AnimatedElement>
    )
  );
}

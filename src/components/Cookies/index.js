import { useState, useEffect } from "react";
import Image from "next/image";

import cookieIcon from "../../assets/icons/cookie.png";

import styles from "./cookies.module.scss";

export function CookieBanner() {
  const [acceptedCookies, setAcceptedCookies] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const delayToShowBanner = setTimeout(() => {
      const cookiesAccepted =
        localStorage.getItem("acceptedCookies") === "true";

      setAcceptedCookies(cookiesAccepted);

      setShowBanner(true);
    }, 3000);

    return () => clearTimeout(delayToShowBanner);
  }, []);

  const handleAcceptCookies = () => {
    setAcceptedCookies(true);
    localStorage.setItem("acceptedCookies", "true");
  };

  const handleRejectCookies = () => {
    setAcceptedCookies(true);
    localStorage.setItem("acceptedCookies", "false");
  };

  return (
    showBanner &&
    !acceptedCookies && (
      <div className={styles.container}>
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
          <button className={styles.button} onClick={handleAcceptCookies}>
            Aceito
          </button>
          <button className={styles.button} onClick={handleRejectCookies}>
            Não, obrigado
          </button>
        </div>
      </div>
    )
  );
}

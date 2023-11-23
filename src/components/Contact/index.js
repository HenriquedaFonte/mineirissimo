import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import Logo from "../../assets/icons/logo.png";
import { BsWhatsapp } from "react-icons/bs";

import { PrimaryButton } from "components/Buttons";

import styles from "./contact.module.scss";

const parent = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1 } },
};

export function Contact() {
  return (
    <motion.section
      className={styles.contact}
      id="contato"
      variants={parent}
      initial="hidden"
      whileInView="visible"
      onReset={true}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logoContainer}>
            <Image
              className={styles.logo}
              src={Logo}
              alt="Logomarca da Mineiríssimo"
            />
          </div>
          <h2 className={styles.title}>
            A felicidade em cada produto. Prove o melhor!
          </h2>
          <Link
            href="https://web.whatsapp.com/send?phone=5581996272423"
            target="_blank"
          >
            <PrimaryButton className={styles.button} size="large">
              <BsWhatsapp />
              peça pelo whatsapp
            </PrimaryButton>
          </Link>
        </div>

        <div className={styles.map}>
          <div className={styles.mapResponsive}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.556599068668!2d-34.902991249168416!3d-8.044564182544107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18fb5fce8337%3A0xb27923733205c42e!2sMineir%C3%ADssimo!5e0!3m2!1spt-BR!2sca!4v1652234316823!5m2!1spt-BR!2sca"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

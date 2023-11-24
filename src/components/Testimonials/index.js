import { Swiper } from "swiper/react";
import { motion } from "framer-motion";

import { TestimonialsCards } from "components/TestimonialsCards";

import styles from "./testimonials.module.scss";

const parent = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1 } },
};

export function Testimonials() {
  return (
    <motion.section
      className={styles.testimonials}
      id="depoimentos"
      variants={parent}
      initial="hidden"
      whileInView="visible"
    >
      <h4 className={styles.title}>depoimentos</h4>
      <h1 className={styles.headline}>Veja quem já passou por aqui</h1>

      <motion.div variants={parent} initial="hidden" whileInView="visible">
        <Swiper className={styles.testimonialsList} id="testimonialsList">
          <TestimonialsCards />
        </Swiper>
      </motion.div>
    </motion.section>
  );
}

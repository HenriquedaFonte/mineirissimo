import { Swiper } from "swiper/react";

import { TestimonialsCards } from "components/TestimonialsCards";
import { AnimatedElement } from "utils/animations";

import styles from "./testimonials.module.scss";

export function Testimonials() {
  return (
    <AnimatedElement
      element="section"
      className={styles.testimonials}
      id="depoimentos"
    >
      <h4 className={styles.title}>depoimentos</h4>
      <h1 className={styles.headline}>Veja quem já passou por aqui</h1>

      <AnimatedElement element="div">
        <Swiper className={styles.testimonialsList} id="testimonialsList">
          <TestimonialsCards />
        </Swiper>
      </AnimatedElement>
    </AnimatedElement>
  );
}

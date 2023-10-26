import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { productsData } from "database";

import styles from "./productsCards.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export function ProductsCards() {
  return (
    <Swiper
      // install Swiper modules
      className={styles.container}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ hide: true, enabled: false }}
    >
      {productsData.map((product) => (
        <SwiperSlide className={styles.cardContainer} key={product.id}>
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <Image
                src={product.img}
                className={styles.image}
                alt={`Imagem de ${product.name}`}
              />
            </div>
            <div className={styles.cardBody}>
              <h5 className={styles.title}>{product.name}</h5>
              <p className={styles.content}>{product.info}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

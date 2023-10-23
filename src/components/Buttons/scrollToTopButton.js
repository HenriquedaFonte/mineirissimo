import { AiOutlineArrowUp } from "react-icons/ai";

import { ScrollToTop } from "../../utils/scrollToTop";

import styles from "./buttons.module.scss";

export function ScrollToTopButton() {
  return (
    <div className={styles.scrollToTopButtonContainer}>
      <button
        type="button"
        className={styles.backToTopButton}
        onClick={() => ScrollToTop()}
        title="Voltar ao topo"
      >
        <AiOutlineArrowUp className={styles.arrowUp} />
      </button>
    </div>
  );
}

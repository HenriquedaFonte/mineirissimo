import PropTypes from "prop-types";

import styles from "./header.module.scss";

import capitalize from "utils/capitalize";

export function BaseHeader({ children, size = "large", dark = "inactive" }) {
  const sizeClass = size;
  const sizeClassName = styles[sizeClass];

  const darkClass = `dark${capitalize(dark)}`;
  const darkClassName = styles[darkClass];

  return (
    <div className={`${styles.header} ${sizeClassName} ${darkClassName}`}>
      <div className={`${styles.container} container`}>
        <div className="row align-items-center justify-content-between">
          {children}
        </div>
      </div>
    </div>
  );
}

BaseHeader.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  dark: PropTypes.oneOf(["active", "inactive"]),
};

import { BaseButton } from "./BaseButton";
import styles from "./buttons.module.scss";

export function SecondaryButton({ children, Icon, className, size }) {
  return (
    <BaseButton
      size={size}
      className={`${styles.secondaryButton} ${className}`}
      Icon={Icon}
    >
      {children}
    </BaseButton>
  );
}

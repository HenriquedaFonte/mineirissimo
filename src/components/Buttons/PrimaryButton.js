import { BaseButton } from "./BaseButton";
import styles from "./buttons.module.scss";

export function PrimaryButton({ children, Icon, className, size }) {
  return (
    <BaseButton
      size={size}
      className={`${styles.primaryButton} ${className}`}
      Icon={Icon}
    >
      {children}
    </BaseButton>
  );
}

import styles from "./smoke.module.scss";

export function Smoke() {
  const smoke = [1, 2, 5, 4, 6, 19, 7, 8, 9, 10, 11, 17, 16, 6, 1, 19, 18, 15, 14, 20, 21, 12, 13, 15, 22, 23, 24, 30];
  return (
    <div className={styles.vapour}>
      {smoke.map((smoke, i) => (
        <span 
          key={i} 
          style={{ '--v': smoke }}>
        </span>
      ))}
    </div>
  );
};


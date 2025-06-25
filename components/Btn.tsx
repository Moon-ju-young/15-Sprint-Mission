import { ButtonHTMLAttributes } from "react";
import styles from "./Btn.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "large" | "small";
}

export default function Btn({ size = "large", children, ...props }: Props) {
  return (
    <button className={`${styles.btn} ${styles[size]}`} {...props}>
      <div className={styles.content}>{children}</div>
      <div className={styles.shadow}></div>
    </button>
  );
}

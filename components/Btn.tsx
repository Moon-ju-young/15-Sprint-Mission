import { ButtonHTMLAttributes } from "react";
import styles from "./Btn.module.css";

export default function Btn({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={styles.btn} {...props}>
      <div className={styles.content}>{children}</div>
      <div className={styles.shadow}></div>
    </button>
  );
}

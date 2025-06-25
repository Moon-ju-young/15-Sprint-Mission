import { ButtonHTMLAttributes } from "react";
import styles from "./Btn.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Btn({ children, ...props }: Props) {
  return (
    <button className={styles.btn} {...props}>
      <div className={styles.content}>{children}</div>
      <div className={styles.shadow}></div>
    </button>
  );
}

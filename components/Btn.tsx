import { ButtonHTMLAttributes } from "react";
import styles from "./Btn.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "large" | "small";
  mode: "add" | "delete" | "edit";
}

export default function Btn({ size = "large", mode, ...props }: Props) {
  return (
    <button className={`${styles.btn} ${styles[size]}`} {...props}>
      <div className={styles.content}></div>
      <div className={styles.shadow}></div>
    </button>
  );
}

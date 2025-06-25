import { ButtonHTMLAttributes } from "react";
import styles from "./Btn.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "large" | "small";
  mode: "add" | "delete" | "edit";
}

export default function Btn({ size = "large", mode, ...props }: Props) {
  return (
    <button className={`${styles.btn} ${styles[size]}`} {...props}>
      <div className={styles.content}>
        {size === "large" &&
          (mode === "add"
            ? "추가하기"
            : mode === "delete"
            ? "삭제하기"
            : "수정 완료")}
      </div>
      <div className={styles.shadow}></div>
    </button>
  );
}

import { ButtonHTMLAttributes } from "react";
import styles from "./Btn.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "large" | "small";
  mode: "add" | "delete" | "edit";
}

const CONTENT: Record<Props["mode"], string> = {
  add: "추가하기",
  delete: "삭제하기",
  edit: "수정 완료",
};

export default function Btn({ size = "large", mode, ...props }: Props) {
  return (
    <button className={`${styles.btn} ${styles[size]}`} {...props}>
      <div className={`${styles.content} ${styles[mode]}`}>
        {size === "large" && CONTENT[mode]}
      </div>
      <div className={styles.shadow}></div>
    </button>
  );
}

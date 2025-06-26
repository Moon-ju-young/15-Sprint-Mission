import { InputHTMLAttributes } from "react";
import styles from "./Search.module.css";

export default function Search({
  className = "",
  style,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className={`${styles.search} ${className}`} style={style}>
      <div />
      <input placeholder="할 일을 입력해주세요" {...props} />
    </label>
  );
}

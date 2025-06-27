import { InputHTMLAttributes, Ref } from "react";
import styles from "./Search.module.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  ref?: Ref<HTMLInputElement>;
}

export default function Search({ className = "", style, ...props }: Props) {
  return (
    <label className={`${styles.search} ${className}`} style={style}>
      <div />
      <input placeholder="할 일을 입력해주세요" {...props} />
    </label>
  );
}

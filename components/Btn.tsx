import { ButtonHTMLAttributes, useMemo } from "react";
import Image from "next/image";
import ic_plus_black from "@/assets/icons/plus_black.svg";
import ic_plus_white from "@/assets/icons/plus_white.svg";
import ic_cross from "@/assets/icons/cross.svg";
import ic_check from "@/assets/icons/check.svg";
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
  const img = useMemo(() => {
    switch (mode) {
      case "add":
        return { alt: "plus", src: ic_plus_black };
      case "delete":
        return { alt: "cross", src: ic_cross };
      case "edit":
        return { alt: "check", src: ic_check };
    }
  }, [mode]);

  return (
    <button className={`${styles.btn} ${styles[size]}`} {...props}>
      <div className={`${styles.content} ${styles[mode]}`}>
        <Image height={16} {...img} />
        {size === "large" && CONTENT[mode]}
      </div>
      <div className={styles.shadow}></div>
    </button>
  );
}

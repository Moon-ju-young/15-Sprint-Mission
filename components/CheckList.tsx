import { HTMLAttributes, MouseEventHandler } from "react";
import Image from "next/image";
import ic_checked from "@/assets/icons/checkbox_checked.svg";
import ic_empty from "@/assets/icons//checkbox_empty.svg";
import styles from "./CheckList.module.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  isChecked: boolean;
  onButtonClick: MouseEventHandler<HTMLButtonElement>;
}

export default function CheckList({
  children,
  isChecked,
  onButtonClick,
}: Props) {
  return (
    <div className={`${styles["check-list"]} ${styles[String(isChecked)]}`}>
      <button type="button" onClick={onButtonClick}>
        <Image alt="checkbox" src={isChecked ? ic_checked : ic_empty} />
      </button>
      {children}
    </div>
  );
}

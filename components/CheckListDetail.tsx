import { HTMLAttributes, MouseEventHandler } from "react";
import Image from "next/image";
import ic_checked from "@/assets/icons/checkbox_checked.svg";
import ic_empty from "@/assets/icons//checkbox_empty.svg";
import styles from "./CheckListDetail.module.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  isChecked: boolean;
  onButtonClick: MouseEventHandler<HTMLButtonElement>;
  defaultValue?: string;
}

export default function CheckListDetail({
  className = "",
  isChecked,
  onButtonClick,
  defaultValue,
  ...props
}: Props) {
  return (
    <div
      className={`${styles["check-list"]} ${
        styles[String(isChecked)]
      } ${className}`}
      {...props}
    >
      <button type="button" onClick={onButtonClick}>
        <Image alt="checkbox" src={isChecked ? ic_checked : ic_empty} />
      </button>
      <input defaultValue={defaultValue} />
    </div>
  );
}

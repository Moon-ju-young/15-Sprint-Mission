import { HTMLAttributes, MouseEventHandler } from "react";
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
  return;
}

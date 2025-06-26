import { HTMLAttributes, MouseEventHandler, ReactNode } from "react";
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
  return;
}

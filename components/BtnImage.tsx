import { ButtonHTMLAttributes } from "react";
import styles from "./BtnImage.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode: "plus" | "edit";
}

export default function BtnImage({ className = "", mode, ...props }: Props) {
  return;
}

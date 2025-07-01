import { ButtonHTMLAttributes } from "react";
import ic_plus from "@/assets/icons/plus_big.svg";
import ic_edit from "@/assets/icons/edit.svg";
import styles from "./BtnImage.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode: "plus" | "edit";
}

export default function BtnImage({ className = "", mode, ...props }: Props) {
  return;
}

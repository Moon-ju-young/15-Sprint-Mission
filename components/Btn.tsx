import { ButtonHTMLAttributes } from "react";

export default function Btn({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props}>
      <div></div>
      <div></div>
    </button>
  );
}

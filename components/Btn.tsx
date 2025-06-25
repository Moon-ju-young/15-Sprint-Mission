import { ButtonHTMLAttributes } from "react";

export default function Btn({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props}>
      <div>{children}</div>
      <div></div>
    </button>
  );
}

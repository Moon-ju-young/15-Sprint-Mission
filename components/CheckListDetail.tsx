import {
  HTMLAttributes,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
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
  const [value, setValue] = useState(defaultValue ?? "");
  const [isEdit, setIsEdit] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEdit) inputRef.current?.focus();
  }, [isEdit]);

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
      <button
        className={isEdit ? styles.conceal : ""}
        type="button"
        onClick={() => setIsEdit(true)}
      >
        {value}
      </button>
      <input
        className={isEdit ? "" : styles.conceal}
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        onBlur={() => setIsEdit(false)}
        onKeyDown={(e) => {
          if (e.key === "Enter") setIsEdit(false);
        }}
      />
    </div>
  );
}

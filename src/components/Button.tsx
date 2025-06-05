import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    styleType?: "small" | "medium" | "large";
    className?: string;
    children?: ReactNode;
}

function Button ({ styleType="small", className='', children, ...props }: Props) {
    return (
    <button className={`${styles.btn} ${styles[styleType]} ${className}`} {...props}>
        {children}
    </button>
    );
}

export default Button;
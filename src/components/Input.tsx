import type { ReactNode, InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import styles from "./Input.module.css";

type Props = {
    label?: string;
    name?: string;
    className?: string;
    inputClassName?: string;
    children?: ReactNode;
};

type InputProps = Props & {
    type?: Exclude<string, 'textarea'>;
} & InputHTMLAttributes<HTMLInputElement>;

type TextareaProps = Props & {
    type?: 'textarea';
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

function Input ({ label, name, className, inputClassName, type="text", children, ...props }: InputProps | TextareaProps) {
    return (<div className={styles.box+' '+className}>
        <label htmlFor={name}>{label}</label>
        {type === "textarea" 
            ? <textarea id={name} name={name} className={inputClassName} {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)} />
            : <input id={name} name={name} type={type} className={inputClassName} {...(props as InputHTMLAttributes<HTMLInputElement>)} />}
        {children}
    </div>);
}

export default Input;
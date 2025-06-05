import type { HTMLAttributes, MouseEventHandler, ReactNode } from "react";
import icX from "../assets/ic_X.svg";
import styles from "./Tag.module.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
    onXClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    children?: ReactNode;
}

function Tag({ onXClick, className='', children, ...props }: Props) {
    return (<div className={styles.tag+' '+className+' '+(onXClick ? styles.x : '')} {...props}>
        #{children}
        {onXClick && <button type="button" onClick={onXClick}><img src={icX} /></button>}
    </div>);
}

export default Tag;
import type { ButtonHTMLAttributes, ReactNode } from "react";
import icHeartLargeActive from "../assets/heart/ic_heart_large_active.svg";
import icHeartLargeInactive from "../assets/heart/ic_heart_large_inactive.svg";
import icHeartMediumActive from "../assets/heart/ic_heart_medium_active.svg";
import icHeartMediumInactive from "../assets/heart/ic_heart_medium_inactive.svg";
import styles from "./ButtonHeart.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    isActive?: boolean;
    className?: string;
    children?: ReactNode;
}

function ButtonHeart({ isActive=false, className='', children, ...props }: Props) {
    return (<button className={styles.btn+' '+className} {...props}>
        <img className={styles.large+' '+styles[String(isActive)]} src={icHeartLargeActive} />
        <img className={styles.large+' '+styles[String(!isActive)]} src={icHeartLargeInactive} />
        <img className={styles.medium+' '+styles[String(isActive)]} src={icHeartMediumActive} />
        <img className={styles.medium+' '+styles[String(!isActive)]} src={icHeartMediumInactive} />
        {children}
    </button>);
}

export default ButtonHeart;
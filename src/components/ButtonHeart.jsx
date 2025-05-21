import icHeartLargeActive from "../assets/heart/ic_heart_large_active.svg";
import icHeartLargeInactive from "../assets/heart/ic_heart_large_inactive.svg";
import icHeartMediumActive from "../assets/heart/ic_heart_medium_active.svg";
import icHeartMediumInactive from "../assets/heart/ic_heart_medium_inactive.svg";
import styles from "./ButtonHeart.module.css";

function ButtonHeart({ isActive=false, className='', children, ...props }) {
    return (<button className={styles.btn+' '+className} {...props}>
        <img className={styles.large+' '+styles[isActive]} src={icHeartLargeActive} />
        <img className={styles.large+' '+styles[!isActive]} src={icHeartLargeInactive} />
        <img className={styles.medium+' '+styles[isActive]} src={icHeartMediumActive} />
        <img className={styles.medium+' '+styles[!isActive]} src={icHeartMediumInactive} />
        {children}
    </button>);
}

export default ButtonHeart;
import icX from "../assets/ic_X.svg";
import styles from "./Tag.module.css";

function Tag({ onXClick, children, className, ...props }) {
    return (<div className={styles.tag+' '+className+' '+(onXClick ? styles.x : '')} {...props}>
        #{children}
        {onXClick && <button type="button" onClick={onXClick}><img src={icX} /></button>}
    </div>);
}

export default Tag;
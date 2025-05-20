import icX from "../assets/ic_X.svg";
import styles from "./Tag.module.css";

function Tag({ children, onXClick, ...props }) {
    return (<div className={styles.tag} {...props}>
        {children}
        <button type="button" onClick={onXClick}><img src={icX} /></button>
    </div>);
}

export default Tag;
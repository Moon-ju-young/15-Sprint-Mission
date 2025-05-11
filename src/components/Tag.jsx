import icX from "../assets/ic_X.svg";
import styles from "./Tag.module.css";

function Tag({ children }) {
    return (<div className={styles.tag} >
        {children}
        <img src={icX} />
    </div>);
}

export default Tag;
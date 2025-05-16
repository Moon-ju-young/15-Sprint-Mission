import { useNavigate } from "react-router-dom";
import styles from "./Button.module.css";

//styleType은 small, medium, large로 나뉜다
function Button ({ styleType="small", className, onClick, to, children, ...props }) {
    const navigate = useNavigate();
    const handleClick = (e) => {
        if (onClick) onClick(e);
        if (to) setTimeout(() => navigate(to), 0);
    }

    return (
    <button className={`${styles.btn} ${styles[styleType]} ${className}`} onClick={handleClick} {...props}>
        {children}
    </button>
    );
}

export default Button;
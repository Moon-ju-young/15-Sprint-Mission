import styles from "./Button.module.css";

//styleType은 small, medium, large로 나뉜다
function Button ({ styleType="small", className='', children, ...props }) {
    return (
    <button className={`${styles.btn} ${styles[styleType]} ${className}`} {...props}>
        {children}
    </button>
    );
}

export default Button;
import styles from "./Input.module.css";

function Input ({ label, name, className, inputClassName, ...props }) {
    return (<div className={styles.box+' '+className}>
        <label htmlFor={name}>{label}</label>
        <input id={name} name={name} className={inputClassName} {...props} />
    </div>);
}

export default Input;
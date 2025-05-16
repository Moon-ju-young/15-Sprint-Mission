import styles from "./Input.module.css";

function Input ({ label, name, className, inputClassName, type, children, ...props }) {
    return (<div className={styles.box+' '+className}>
        <label htmlFor={name}>{label}</label>
        {type === "textarea" 
            ? <textarea id={name} name={name} className={inputClassName} {...props} />
            : <input id={name} name={name} type={type} className={inputClassName} {...props} />}
        {children}
    </div>);
}

export default Input;
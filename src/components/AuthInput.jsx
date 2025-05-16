import { useState } from "react";
import Input from "./Input";
import icEyeVisible from "../assets/ic_eye_visible.svg";
import icEyeInvisible from "../assets/ic_eye_invisible.svg";
import "./AuthInput.css";

function PasswordInput ({ name, className, onFocusout, valid, wrongMessage, ...props }) {
    const [isVisible, setIsVisible] = useState(false);
    const onClick = () => {
        setIsVisible((prev) => !prev);
    }
    const passwordMatch = () => {
        try {
            const password = document.querySelector("input#password");
            const passwordCheck = document.querySelector("input#password-check");
            if (password.value === passwordCheck.value) {
                passwordCheck.classList.add("correct");
                passwordCheck.classList.remove("wrong");
                passwordCheck.nextElementSibling.nextElementSibling.textContent = null;
            } else if (passwordCheck.value) {
                passwordCheck.classList.add("wrong");
                passwordCheck.classList.remove("correct");
                passwordCheck.nextElementSibling.nextElementSibling.textContent = "비밀번호가 일치하지 않습니다.";
            }
        } catch (e) {}
    }

    return (
    <Input required name={name}
        className={"password "+className}
        type={isVisible ? "text" : "password"} 
        onChange={passwordMatch}
        {...(name === "password-check" 
            ? { onChange: passwordMatch }
            : { inputClassName: valid, minLength: 8, onBlur: onFocusout })}
        {...props}
    >
        <button className="eye-btn" type="button" onClick={onClick}>
            <img src={isVisible ? icEyeVisible : icEyeInvisible} />
        </button>
        <div className="wrong-message">{wrongMessage}</div>
    </Input>
    );
}    

export default function AuthInput ({ label, name, type="text", placeholder='', emptyWrongMessage='', invalidWrongMessage='' }) {
    const [valid, setValid] = useState('');
    const [wrongMessage, setWrongMessage] = useState(null);
    
    const onFocusout = (e) => {
        if (!e.target.value) {
            setValid("wrong");
            setWrongMessage(emptyWrongMessage);
        } else if (!e.target.validity.valid) {
            setValid("wrong");
            setWrongMessage(invalidWrongMessage);
        } else {
            setValid("correct");
            setWrongMessage(null);
        }
    }

    if (type === "password") {
        return (<PasswordInput className="auth-input-box" name={name} label={label} placeholder={placeholder} 
            onFocusout={onFocusout} valid={valid} wrongMessage={wrongMessage} />);
    }
    return (<Input className="auth-input-box" label={label} name={name} type={type} placeholder={placeholder} onBlur={onFocusout} inputClassName={valid}>
        <div className="wrong-message">{wrongMessage}</div>
    </Input>);
}
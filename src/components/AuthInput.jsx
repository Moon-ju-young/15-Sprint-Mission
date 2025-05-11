import { useState } from "react";
import Input from "./Input";
import icEyeVisible from "../assets/ic_eye_visible.svg";
import icEyeInvisible from "../assets/ic_eye_invisible.svg";

function PasswordInput ({ name, label, placeholder, onFocusout, valid, wrongMessage }) {
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

    if (name === "password-check") {
        return (
        <Input required name={name} label={label}
            className="password"
            type={isVisible ? "text" : "password"} 
            placeholder={placeholder}
            onChange={passwordMatch}
        >
            <button className="eye-btn" type="button" onClick={onClick}>
                <img src={isVisible ? icEyeVisible : icEyeInvisible} />
            </button>
            <div className="wrong-message">{wrongMessage}</div>
        </Input>
        );
    }
    return (
    <Input required name={name} label={label}
        className="password"
        inputClassName={valid} 
        type={isVisible ? "text" : "password"} 
        placeholder={placeholder}
        minLength="8"
        onBlur={onFocusout}
        onChange={passwordMatch}
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
        return (<>
            <PasswordInput name={name} label={label} placeholder={placeholder} onFocusout={onFocusout} valid={valid} wrongMessage={wrongMessage} />
        </>);
    }
    return (<Input label={label} name={name} type={type} placeholder={placeholder} onBlur={onFocusout} inputClassName={valid}>
        <div className="wrong-message">{wrongMessage}</div>
    </Input>);
}
import { useState } from "react";
import icEyeVisible from "../assets/ic_eye_visible.svg";
import icEyeInvisible from "../assets/ic_eye_invisible.svg";

function NormalInput ({ name, type, placeholder, onFocusout, valid, wrongMessage }) {
    return (<>
        <input required className={valid} id={name} name={name} type={type} placeholder={placeholder} onBlur={onFocusout} />
        <div className="wrong-message">{wrongMessage}</div>
    </>)
}

function PasswordInput ({ name, placeholder, onFocusout, valid, wrongMessage }) {
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
                passwordCheck.nextElementSibling.textContent = null;
            } else if (passwordCheck.value) {
                passwordCheck.classList.add("wrong");
                passwordCheck.classList.remove("correct");
                passwordCheck.nextElementSibling.textContent = "비밀번호가 일치하지 않습니다.";
            }
        } catch (e) {}
    }

    if (name === "password-check") {
        return (<div className="password-container">
            <input required id={name} name={name}
                type={isVisible ? "text" : "password"} 
                placeholder={placeholder}
                onChange={passwordMatch}
            />
            <div className="wrong-message"></div>
            <button className="eye-btn" type="button" onClick={onClick}>
                <img src={isVisible ? icEyeVisible : icEyeInvisible} />
            </button>
        </div>);
    }
    return (<div className="password-container">
        <input required className={valid} id={name} name={name}
            type={isVisible ? "text" : "password"} 
            placeholder={placeholder}
            minLength="8"
            onBlur={onFocusout}
            onChange={passwordMatch}
        />
        <div className="wrong-message">{wrongMessage}</div>
        <button className="eye-btn" type="button" onClick={onClick}>
            <img src={isVisible ? icEyeVisible : icEyeInvisible} />
        </button>
    </div>);
}    

export default function Input ({ label, name, type="text", placeholder='', emptyWrongMessage='', invalidWrongMessage='' }) {
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
            <label htmlFor={name}>{label}</label>
            <PasswordInput name={name} placeholder={placeholder} onFocusout={onFocusout} valid={valid} wrongMessage={wrongMessage} />
        </>);
    }
    return (<>
        <label htmlFor={name}>{label}</label>
        <NormalInput name={name} type={type} placeholder={placeholder} onFocusout={onFocusout} valid={valid} wrongMessage={wrongMessage} />
    </>);
}
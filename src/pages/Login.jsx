import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AuthInput from "../components/AuthInput";
import SimpleLogin from "../components/SimpleLogin";
import Button from "../components/Button";

function Login() {
  const [isValid, setIsValid] = useState(false);
  
  const onFocusout = (e) => {
    setTimeout( () => {
      const inputs = document.querySelectorAll("form input");

      for (let input of inputs) {
        if (!input.classList.contains("correct")){
          setIsValid(false); return;
        }
      }
      setIsValid(true);
    }, 0);
  }

  return (<>
    <Helmet>
      <title>로그인</title>
    </Helmet>
    <form onBlur={onFocusout}>
      <AuthInput label="이메일" name="email" type="email" placeholder="이메일을 입력해주세요"
        emptyWrongMessage="이메일을 입력해주세요." invalidWrongMessage="잘못된 이메일 형식입니다." />
      <AuthInput label="비밀번호" name="password" type="password" placeholder="비밀번호를 입력해주세요"
        emptyWrongMessage="비밀번호를 입력해주세요." invalidWrongMessage="비밀번호를 8자 이상 입력해주세요." />
      <Button styleType="large" className="complete-btn" to="/items" disabled={!isValid} 
        onClick={(e) => e.preventDefault()}>로그인</Button>
    </form>
    <SimpleLogin />
    <div className="guide-text">
      판다마켓이 처음이신가요? <Link to="/signup">회원가입</Link>
    </div>
  </>);
}

export default Login;
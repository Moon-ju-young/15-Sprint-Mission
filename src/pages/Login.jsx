import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import SimpleLogin from "../components/SimpleLogin";
import SubmitButton from "../components/SubmitButton";

function Login() {
  document.title = "로그인";

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
    <form onBlur={onFocusout}>
      <Input label="이메일" name="email" type="email" placeholder="이메일을 입력해주세요"
        emptyWrongMessage="이메일을 입력해주세요." invalidWrongMessage="잘못된 이메일 형식입니다." />
      <Input label="비밀번호" name="password" type="password" placeholder="비밀번호를 입력해주세요"
        emptyWrongMessage="비밀번호를 입력해주세요." invalidWrongMessage="비밀번호를 8자 이상 입력해주세요." />
      <SubmitButton className="complete-btn" link="/items" disabled={!isValid}>로그인</SubmitButton>
    </form>
    <SimpleLogin />
    <div className="guide-text">
      판다마켓이 처음이신가요? <Link to="/signup">회원가입</Link>
    </div>
  </>);
}

export default Login;
import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import SimpleLogin from "../components/SimpleLogin";
import SubmitButton from "../components/SubmitButton";

function Signup() {
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
      <Input label="닉네임" name="nickname" placeholder="닉네임을 입력해주세요"
        emptyWrongMessage="닉네임을 입력해주세요." />
      <Input label="비밀번호" name="password" type="password" placeholder="비밀번호를 입력해주세요"
        emptyWrongMessage="비밀번호를 입력해주세요." invalidWrongMessage="비밀번호를 8자 이상 입력해주세요." />
      <Input label="비밀번호 확인" name="password-check" type="password" placeholder="비밀번호를 다시 한 번 입력해주세요" />
      <SubmitButton className="complete-btn" link="/login" disabled={!isValid}>회원가입</SubmitButton>
    </form>
    <SimpleLogin />
    <div className="guide-text">
      이미 회원이신가요? <Link to="/login">로그인</Link>
    </div>
  </>);
}

export default Signup;
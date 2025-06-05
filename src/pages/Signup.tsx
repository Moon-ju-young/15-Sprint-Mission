import { type MouseEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AuthInput from "../components/AuthInput";
import SimpleLogin from "../components/SimpleLogin";
import Button from "../components/Button";

function Signup() {
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();
    
  const onFocusout = () => {
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
      <title>회원가입</title>
    </Helmet>
    <form onBlur={onFocusout}>
      <AuthInput label="이메일" name="email" type="email" placeholder="이메일을 입력해주세요"
        emptyWrongMessage="이메일을 입력해주세요." invalidWrongMessage="잘못된 이메일 형식입니다." />
      <AuthInput label="닉네임" name="nickname" placeholder="닉네임을 입력해주세요"
        emptyWrongMessage="닉네임을 입력해주세요." />
      <AuthInput label="비밀번호" name="password" type="password" placeholder="비밀번호를 입력해주세요"
        emptyWrongMessage="비밀번호를 입력해주세요." invalidWrongMessage="비밀번호를 8자 이상 입력해주세요." />
      <AuthInput label="비밀번호 확인" name="password-check" type="password" placeholder="비밀번호를 다시 한 번 입력해주세요" />
      <Button styleType="large" className="complete-btn" disabled={!isValid} 
        onClick={(e: MouseEvent<HTMLButtonElement>) => {e.preventDefault(); navigate("/login");}}>
        회원가입
      </Button>
    </form>
    <SimpleLogin />
    <div className="guide-text">
      이미 회원이신가요? <Link to="/login">로그인</Link>
    </div>
  </>);
}

export default Signup;
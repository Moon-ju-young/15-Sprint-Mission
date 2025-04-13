import icGoogle from "../assets/ic_google_color.svg";
import icKakaotalk from "../assets/ic_kakaotalk_color.svg";

export default function SimpleLogin () {
    return (<div className="simple-login">
        간편 로그인하기
        <div>
            <a className="google" href="https://www.google.com/">
                <img src={icGoogle} />
            </a>
            <a className="kakaotalk" href="https://www.kakaocorp.com/page/">
                <img src={icKakaotalk} />
            </a>
        </div>
    </div>);
}
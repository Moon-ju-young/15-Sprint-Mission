import { Link, NavLink, useNavigate } from 'react-router-dom';
import Button from './Button';
import logoBig from '../assets/logo.png';
import logoSmall from '../assets/logo_text.png';
import icProfile from '../assets/ic_profile.svg';
import styles from "./Nav.module.css";

//type: default, tab, profile
export default function Nav({ type = "default" }) {
    const navigate = useNavigate(); 

    return (<header className={styles.nav}>
        <div className={styles.container}>
            <div className={styles.container}>
                <Link id={styles.logo} to="/">
                    <img className={styles.small} src={logoSmall} />
                    <img className={styles.big} src={logoBig} alt="판다마켓" />
                </Link>
                {type === "default" ||
                    <div className={styles.container+' '+styles.menu}>
                        <NavLink>자유게시판</NavLink>
                        <NavLink className={styles.selected}>중고마켓</NavLink>
                    </div>}
            </div>
            {type === "profile" 
                ? <img className={styles.profile} alt="프로필" src={icProfile} />
                : <Button className={styles[type]} onClick={() => navigate("/login")}>로그인</Button>}
        </div>
    </header>);
}
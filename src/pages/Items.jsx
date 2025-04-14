import { Link } from 'react-router-dom';
import logoBig from '../assets/logo.png';
import logoSmall from '../assets/logo_text.png';
import icProfile from '../assets/ic_profile.svg';
import './Items.css';

function Items() {
  document.title = "중고마켓";

  return (<div id="items">
    <header>
      <div className="container">
        <div className="container">
          <Link className="logo" to="/">
            <img id="logo-small" src={logoSmall} />
            <img id="logo-big" src={logoBig} alt="판다마켓" />
          </Link>
          <div className="container menu">
            <Link>자유게시판</Link>
            <Link className="selected">중고마켓</Link>
          </div>
        </div>
        <img className="profile" alt="프로필" src={icProfile} />
      </div>
    </header>

  </div>);
}

export default Items;
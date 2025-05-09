import { Outlet, Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Auth.css';

function Auth() {
  return (<div id="Auth">
    <main>
      <Link className="logo" to="/">
        <img className="logo" src={logo} alt="판다마켓" />
      </Link>
      <Outlet />
    </main>
  </div>);
}

export default Auth;
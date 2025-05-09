import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ItemList from '../components/ItemList';
import Dropdown from '../components/Dropdown';
import logoBig from '../assets/logo.png';
import logoSmall from '../assets/logo_text.png';
import icProfile from '../assets/ic_profile.svg';
import icSearch from '../assets/ic_search.svg';
import './Items.css';
import Pagenation from '../components/Pagenation';

function Items() {
  document.title = "중고마켓";

  const [mode, setMode] = useState(window.innerWidth < 768 ? "Mobile" : (window.innerWidth < 1200 ? "Tablet" : "PC"));
  const [order, setOrder] = useState("recent");
  const [totalCount, setTotalCount] = useState(1);
  const [page, setPage] = useState(1);

  const handleResize = () => {
    if (window.innerWidth < 768) { setMode("Mobile"); }
    else if (window.innerWidth < 1200) { setMode("Tablet"); }
    else { setMode("PC"); }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => setPage(1), [order]);

  return (<div id="items">
    <header>
      <div className="container">
        <div className="container">
          <Link className="logo" to="/">
            <img id="logo-small" src={logoSmall} />
            <img id="logo-big" src={logoBig} alt="판다마켓" />
          </Link>
          <div className="container menu">
            <NavLink>자유게시판</NavLink>
            <NavLink className="selected">중고마켓</NavLink>
          </div>
        </div>
        <img className="profile" alt="프로필" src={icProfile} />
      </div>
    </header>
    <main>
      <h2 className="title">베스트 상품</h2>
      <ItemList 
        rows={1} columns={ mode==="PC" ? 4 : (mode==="Tablet" ? 2 : 1) } 
        itemCount={4}
        orderBy="favorite" 
        setTotalCount={setTotalCount}
      />
      <div className="toolbar">
        <h2 className="title">전체 상품</h2>
        <div className="search">
          <input placeholder="검색할 상품을 입력해주세요" />
          <img src={icSearch} />
        </div>
        <Link className="register" to="/additem">상품 등록하기</Link>
        <Dropdown mode={mode} state={order} setState={setOrder} />
      </div>
      <ItemList 
        rows={2} columns={ mode==="PC" ? 5 : (mode==="Tablet" ? 3 : 2) } 
        page={page}
        orderBy={order} 
        setTotalCount={setTotalCount}
      />
      <Pagenation page={page} setPage={setPage} pageSize={ mode==="PC" ? 10 : (mode==="Tablet" ? 6 : 4) } totalCount={totalCount} />
    </main>
  </div>);
}

export default Items;
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ItemList from '../components/ItemList';
import Dropdown from '../components/Dropdown';
import Pagenation from '../components/Pagenation';
import { getProducts } from "../api/api";
import logoBig from '../assets/logo.png';
import logoSmall from '../assets/logo_text.png';
import icProfile from '../assets/ic_profile.svg';
import icSearch from '../assets/ic_search.svg';
import './Items.css';

const PAGESIZE = {
  PC: 10,
  Tablet: 6,
  Mobile: 4,
}

function Items() {
  document.title = "중고마켓";

  const [mode, setMode] = useState(window.innerWidth < 768 ? "Mobile" : (window.innerWidth < 1200 ? "Tablet" : "PC"));
  const [orderBy, setOrderBy] = useState("recent");
  const [totalCount, setTotalCount] = useState(1);
  const [page, setPage] = useState(1);
  const [bestItems, setBestItems] = useState([]);
  const [totalItems, setTotalItems] = useState([]);

  const getItems = async (page, pageSize, orderBy) => {
    const { totalCount, list } = await getProducts({ page, pageSize, orderBy });
    setTotalCount(totalCount);
    return list;
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) { setMode("Mobile"); }
      else if (window.innerWidth < 1200) { setMode("Tablet"); }
      else { setMode("PC"); }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => setPage(1), [orderBy]);

  useEffect(() => {
    (async () => setBestItems(await getItems(1, 4, "favorite")))();
  }, []);

  useEffect(() => {
    (async () => setTotalItems(await getItems(page, PAGESIZE[mode], orderBy)))();
  }, [page, mode, orderBy]);

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
      <ItemList rows={1} columns={PAGESIZE[mode]/2 - 1} items={bestItems} />
      <div className="toolbar">
        <h2 className="title">전체 상품</h2>
        <div className="search">
          <input placeholder="검색할 상품을 입력해주세요" />
          <img src={icSearch} />
        </div>
        <Link className="register" to="/additem">상품 등록하기</Link>
        <Dropdown mode={mode} state={orderBy} setState={setOrderBy} />
      </div>
      <ItemList rows={2} columns={PAGESIZE[mode]/2} items={totalItems} />
      <Pagenation page={page} setPage={setPage} pageSize={PAGESIZE[mode]} totalCount={totalCount} />
    </main>
  </div>);
}

export default Items;
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Nav from '../components/Nav';
import ItemList from '../components/ItemList';
import Button from '../components/Button';
import Dropdown from '../components/DropdownSort';
import Pagenation from '../components/Pagenation';
import type { Product } from '../api/apiTypes';
import { getProducts } from "../api/api";
import icSearch from '../assets/ic_search.svg';
import './Items.css';

const PAGESIZE: { [size: string]: number; } = {
  PC: 10,
  Tablet: 6,
  Mobile: 4,
}

function Items() {
  const [mode, setMode] = useState<"Mobile" | "Tablet" | "PC">(
    window.innerWidth < 768 ? "Mobile" : (window.innerWidth < 1200 ? "Tablet" : "PC")
  );
  const [orderBy, setOrderBy] = useState<"favorite" | "recent">("recent");
  const [totalCount, setTotalCount] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const [bestItems, setBestItems] = useState<Product[]>([]);
  const [totalItems, setTotalItems] = useState<Product[]>([]);
  const navigate = useNavigate();

  const getItems = async (page: number, pageSize: number, orderBy: "favorite" | "recent") => {
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
    <Helmet>
      <title>중고마켓</title>
    </Helmet>
    <Nav type="profile" />
    <main>
      <h2 className="title">베스트 상품</h2>
      <ItemList rows={1} columns={PAGESIZE[mode]/2 - 1} items={bestItems} />
      <div className="toolbar">
        <h2 className="title">전체 상품</h2>
        <div className="search">
          <input placeholder="검색할 상품을 입력해주세요" />
          <img src={icSearch} />
        </div>
        <Button className="register" onClick={() => navigate("/additem")}>상품 등록하기</Button>
        <Dropdown mode={mode} state={orderBy} setState={setOrderBy} />
      </div>
      <ItemList rows={2} columns={PAGESIZE[mode]/2} items={totalItems} />
      <Pagenation page={page} setPage={setPage} pageSize={PAGESIZE[mode]} totalCount={totalCount} />
    </main>
  </div>);
}

export default Items;
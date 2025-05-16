import { useEffect, useState } from "react";
import icArrow from "../assets/ic_arrow_left.svg";
import styles from "./Pagenation.module.css";

export default function Pagenation({ page, setPage, pageSize, totalCount }) {
    const [maxPage, setMaxPage] = useState(1);
    const [list, setList] = useState([1]);

    useEffect(() => {
        setMaxPage( totalCount === 0 ? 1 : Math.ceil(totalCount/pageSize) );
    }, [totalCount, pageSize]);

    useEffect(() => {
        if (page > maxPage) { setPage(maxPage); return; }

        const temp = Math.ceil(page/5 - 1)*5;
        const tempList = [temp+1];
        for (let i = temp+2; i <= Math.min(temp+5, maxPage); i++) { tempList.push(i); }
        setList(tempList);
    }, [page, maxPage]);

    return (<div className={styles.pagenation}>
        <button 
            disabled={page <= 1}
            onClick={() => setPage( Math.ceil(page/5) === 1 ? 1 : Math.ceil(page/5 - 1)*5 )}
        >
            <img src={icArrow} />
        </button>
        {list.map((e) => {
            return <button key={e} className={e===page ? styles.selected : ""} onClick={() => setPage(e)}>{e}</button>
        })}
        <button 
            disabled={page >= maxPage}
            onClick={() => setPage( Math.ceil(page/5) === Math.ceil(maxPage/5) ? maxPage : Math.ceil(page/5)*5+1 )}
        >
            <img src={icArrow} />
        </button>
    </div>);
}
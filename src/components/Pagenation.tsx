import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import icArrowLeftActive from "../assets/arrow/ic_arrow_left_active.svg";
import icArrowLeftInactive from "../assets/arrow/ic_arrow_left_inactive.svg";
import icArrowRightActive from "../assets/arrow/ic_arrow_right_active.svg";
import icArrowRightInactive from "../assets/arrow/ic_arrow_right_inactive.svg";
import styles from "./Pagenation.module.css";

export default function Pagenation({ page, setPage, pageSize, totalCount }: {
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
    pageSize: number;
    totalCount: number;
}) {
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
            disabled={Math.ceil(page/5) === 1}
            onClick={() => setPage(Math.ceil(page/5 - 1)*5)}
        >
            <img className={styles.active} src={icArrowLeftActive} />
            <img className={styles.inactive} src={icArrowLeftInactive} />
        </button>
        {list.map((e) => {
            return <button key={e} className={e===page ? styles.selected : ""} onClick={() => setPage(e)}>{e}</button>
        })}
        <button 
            disabled={Math.ceil(page/5) === Math.ceil(maxPage/5)}
            onClick={() => setPage(Math.ceil(page/5)*5+1)}
        >
            <img className={styles.active} src={icArrowRightActive} />
            <img className={styles.inactive} src={icArrowRightInactive} />
        </button>
    </div>);
}
import { useEffect, useState } from "react";
import { getProducts } from "../api/api";
import icHeart from "../assets/ic_heart.svg";
import styles from "./ItemList.module.css";

export default function ItemList ( { rows, columns, itemCount, page, orderBy, setTotalCount } ) {
    const [items, setItems] = useState([]);
    const getItems = async () => {
        const { totalCount, list } = await getProducts({ page, pageSize: (itemCount || rows*columns), orderBy });
        setTotalCount(totalCount);
        setItems(list);
    }

    useEffect( () => {
        getItems();
        return () => { if (itemCount) return; }
    }, [rows, columns, page, orderBy]);

    return (<section className={styles.list} style={{gridTemplate: `repeat(${rows}, 1fr) / repeat(${columns}, 1fr)`}}>
        {items.slice(0,rows*columns).map((e) => (
            <Item key={e.id} {...e} />
        ))}
    </section>);
}

function Item ( { name, price, favoriteCount, images } ) {
    return (<article className={styles.item}>
        <div className={styles.image} style={{backgroundImage: `url(${images && images[0]})`}}></div>
        <div className={styles.text}>
            <div className={styles.title}>{name}</div>
            <div className={styles.price}>{price.toLocaleString()}원</div>
            <div className={styles.favoriteCount}>
                <img src={icHeart} />
                <span>{favoriteCount}</span>
            </div>
        </div>
    </article>);
}
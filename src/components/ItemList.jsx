import { useEffect, useState } from "react";
import { getProducts } from "../api/api";
import icHeart from "../assets/ic_heart.svg";
import styles from "./ItemList.module.css";

export default function ItemList ( { rows, columns, page, orderBy } ) {
    const [items, setItems] = useState([]);
    const getItems = async () => {
        const { list } = await getProducts({ page, pageSize: (rows*columns), orderBy });
        setItems(list);
    }

    useEffect( () => {
        getItems();
    }, []);

    return (<section className={styles.list} style={{gridTemplate: `repeat(${rows}, 1fr) / repeat(${columns}, 1fr)`}}>
        {items.map((e) => (
            <Item key={e.id} {...e} />
        ))}
    </section>);
}

function Item ( { name, price, favoriteCount, images } ) {
    return (<article className={styles.item}>
        <div className={styles.image} style={{backgroundImage: `url(${images && images[0]})`}}></div>
        <div className={styles.text}>
            <div className={styles.title}>{name}</div>
            <div className={styles.price}>{price}원</div>
            <div className={styles.favoriteCount}>
                <img src={icHeart} />
                <span>{favoriteCount}</span>
            </div>
        </div>
    </article>);
}
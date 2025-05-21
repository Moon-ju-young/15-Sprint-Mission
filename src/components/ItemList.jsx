import { useNavigate } from "react-router-dom";
import icHeart from "../assets/heart/ic_heart_small_inactive.svg";
import styles from "./ItemList.module.css";

export default function ItemList ( { rows, columns, items } ) {
    const navigate = useNavigate();

    return (<section className={styles.list} style={{gridTemplate: `repeat(${rows}, 1fr) / repeat(${columns}, 1fr)`}}>
        {items.slice(0, rows*columns).map((e) => (
            <Item key={e.id} onClick={() => navigate("/items/"+e.id)} {...e} />
        ))}
    </section>);
}

function Item ( { name, price, favoriteCount, images, onClick } ) {
    return (<article className={styles.item} onClick={onClick}>
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
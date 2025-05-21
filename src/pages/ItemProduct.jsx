import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct, getProductComments } from "../api/api";

function ItemProduct() {
    const { productId } = useParams();
    const [data, setData] = useState();
    const [comments, setComments] = useState([]);
    
    useEffect(() => {
        (async () => setData(await getProduct({ productId })))();
    }, []);

    useEffect(() => {
        (async () => {
            const { list } = await getProductComments({ productId, limit: 9999 });
            setComments(list);
        })();
    }, []);

    return (<div id="item-product"></div>);
}

export default ItemProduct;
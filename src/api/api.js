const BASE_URL = "https://panda-market-api.vercel.app";

export async function getProducts( { page=1, pageSize=10, orderBy="recent", keyword } ) {
    const query = new URLSearchParams({ page, pageSize, orderBy }).toString();
    const products = await fetch(`${BASE_URL}/products?${query}${keyword ? "&keyword="+keyword : ''}`);
    return (await products.json());
}
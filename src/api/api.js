const BASE_URL = "https://panda-market-api.vercel.app";

export async function getProducts({ page=1, pageSize=10, orderBy="recent", keyword='' }) {
    const query = new URLSearchParams({ page, pageSize, orderBy }).toString();
    const response = await fetch(`${BASE_URL}/products?${query}${keyword && "&keyword="+keyword}`);
    if (!response.ok) { throw Error("Request Error"); }
    return (await response.json());
}

export async function getProduct({ productId }) {
    const response = await fetch(`${BASE_URL}/products/${productId}`);
    if (!response.ok) { throw Error("Request Error"); }
    return (await response.json());
}

export async function getProductComments({ productId, limit }) {
    const response = await fetch(`${BASE_URL}/products/${productId}/comments?limit=${limit}`);
    if (!response.ok) { throw Error("Request Error"); }
    return (await response.json());
}
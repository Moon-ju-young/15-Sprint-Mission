import type { Comments, Product, Products } from "./apiTypes";

const BASE_URL = "https://panda-market-api.vercel.app";

export async function getProducts({ page=1, pageSize=10, orderBy="recent", keyword='' }: {
    page?: number;
    pageSize?: number;
    orderBy?: "recent" | "favorite";
    keyword?: string;
}): Promise<Products> {
    const response = await fetch(`${BASE_URL}/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}${keyword && "&keyword="+keyword}`);
    if (!response.ok) { throw Error("Request Error"); }
    return (await response.json()) as Products;
}

export async function getProduct({ productId }: {
    productId: number | string;
}): Promise<Product> {
    const response = await fetch(`${BASE_URL}/products/${productId}`);
    if (!response.ok) { throw Error("Request Error"); }
    return (await response.json()) as Product;
}

export async function getProductComments({ productId, limit }: {
    productId: number | string;
    limit: number;
}): Promise<Comments> {
    const response = await fetch(`${BASE_URL}/products/${productId}/comments?limit=${limit}`);
    if (!response.ok) { throw Error("Request Error"); }
    return (await response.json()) as Comments;
}
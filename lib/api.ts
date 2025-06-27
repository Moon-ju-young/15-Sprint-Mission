import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

type ResponseItems = {
  isCompleted: boolean;
  name: string;
  id: number;
}[];

type ResponseItem = {
  isCompleted: boolean;
  imageUrl: string;
  memo: string;
  name: string;
  tenantId: string;
  id: number;
};

type PostItem = {
  name: string;
};

type PatchItem = {
  name: string;
  memo: string;
  imageUrl: string;
  isCompleted: boolean;
};

export async function getItems() {
  const response = await api.get<ResponseItems>("/items");
  return response.data;
}

export async function getItem(itemId: number) {
  const response = await api.get<ResponseItem>("/items/" + itemId);
  return response.data;
}

export async function postItem(itemId: number, body: PostItem) {
  const response = await api.post<ResponseItem>("/items/" + itemId, body);
  return response.data;
}

export async function patchItem(itemId: number, body: PatchItem) {
  const response = await api.patch<ResponseItem>("/items/" + itemId, body);
  return response.data;
}

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

export async function getItems() {
  const response = await api.get<ResponseItems>("/items");
  return response.data;
}

export async function getItem(itemId: number) {
  const response = await api.get<ResponseItem>("/items/" + itemId);
  return response.data;
}

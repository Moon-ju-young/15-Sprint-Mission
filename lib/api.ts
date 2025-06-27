import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

type ResponseItems = {
  isCompleted: boolean;
  name: string;
  id: number;
}[];

export async function getItems(): Promise<ResponseItems> {
  const response = await api.get<ResponseItems>("/items");
  return response.data;
}

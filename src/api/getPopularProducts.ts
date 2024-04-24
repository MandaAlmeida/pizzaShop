import { api } from "@/lib/axios";

export type GetPopularProductResponse = {
  product: string;
  amount: number;
}[];

export async function getPopularProducts() {
  const response = await api.get<GetPopularProductResponse>(
    "/metrics/popular-products",
  );

  return response.data;
}

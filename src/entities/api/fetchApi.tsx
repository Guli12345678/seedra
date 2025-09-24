import { api } from "@/shared/api";

export const fetProducts = async () => {
  const response = await api.get("products?limit=6");
  return response.data;
};

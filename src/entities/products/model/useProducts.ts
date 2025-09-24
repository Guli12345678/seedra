import { useQuery } from "@tanstack/react-query";
import { fetProducts } from "../../api/fetchApi";

export const useProduct = () => {
  // SuccessType, ErrorType
  const getProducts = () =>
    useQuery<any, any>({
      queryKey: ["productKey"], // deps
      queryFn: fetProducts,
      retry: 0,
    });
  // // SuccessType, ErrorType, BodyType
  // useMutation<any, any,any>({
  //     mutationFn: (body)
  // })

  // const getProductById = (id: string) =>
  //   useQuery({
  //     queryKey: ["productKey", id],
  //     queryFn: () => fetchProductById(id),
  //   });

  return { getProducts };
};

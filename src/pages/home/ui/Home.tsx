import { memo } from "react";
import Hero from "../../../widgets/hero";
import ProductList from "../../../widgets/products";
import { useProduct } from "../../../entities/products/model/useProducts";

export const Home = memo(() => {
  const { getProducts } = useProduct();
  const { data } = getProducts();

  console.log(data);

  return (
    <div>
      <Hero />
      <ProductList products={data?.products} />
    </div>
  );
});

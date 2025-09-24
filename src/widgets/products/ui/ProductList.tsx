import { memo, type FC } from "react";
import { ProductCard } from "../../../entities/product-card/ui/ProductCard";
import leaf from "@/shared/assets/leaf.svg";

export interface IProduct {
  id: number;
  stock: number;
  title: string;
  rating: number;
  thumbnail: string;
  price: number;
}

interface Props {
  products: IProduct[];
}

export const ProductList: FC<Props> = memo(({ products }) => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between mt-8 items-center">
        <h2 className="font-semibold text-[36px] ">Our products.</h2>

        <h3 className=" text-[#359740] font-medium text-[16px]">
          View all (12)
        </h3>
      </div>
      <div className="flex flex-wrap gap-4 py-4">
        <div className="flex gap-2 w-[120px] h-[72px] justify-center border border-slate-200 mt-5">
          <img className="w-[25px]" src={leaf} alt="" />{" "}
          <span className="mt-6">ALL</span>
        </div>
        <div className="flex gap-2 w-[164px] h-[72px] justify-center border border-slate-200 mt-5">
          <img className="w-[25px]" src={leaf} alt="" />{" "}
          <span className="mt-6">BUNDLES</span>
        </div>
        <div className="flex gap-2 w-[138px] h-[72px] justify-center border border-slate-200 mt-5">
          <img className="w-[25px]" src={leaf} alt="" />{" "}
          <span className="mt-6">HERBS</span>
        </div>
        <div className="flex gap-2 w-[194px] h-[72px] justify-center border border-slate-200 mt-5">
          <img className="w-[25px]" src={leaf} alt="" />{" "}
          <span className="mt-6">VEGETABLES</span>
        </div>
        <div className="flex gap-2 w-[168px] h-[72px] justify-center border border-slate-200 mt-5">
          <img className="w-[25px]" src={leaf} alt="" />{" "}
          <span className="mt-6">FRUITS</span>
        </div>
        <div className="flex gap-2 w-[177px] h-[72px] justify-center border border-slate-200 mt-5">
          <img className="w-[25px]" src={leaf} alt="" />{" "}
          <span className="mt-6">SUPPLIES</span>
        </div>
        <div className="flex gap-2 w-[183px] h-[72px] justify-center border border-slate-200 mt-5">
          <img className="w-[25px]" src={leaf} alt="" />{" "}
          <span className="mt-6">FLOWERS</span>
        </div>
      </div>
      <div>
        <div className="container mt-10 grid lg:grid-cols-3 gap-[30px] md:grid-cols-3 grid-cols-1 ">
          {products?.map((item: any) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
});

import { memo, type FC } from "react";
import { useNavigate } from "react-router-dom";
import type { IProduct } from "../../../widgets/products/ui/ProductList";
import { GoStarFill } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";

interface Props {
  product: IProduct;
}

export const ProductCard: FC<Props> = memo((props) => {
  const { product } = props;
  const navigate = useNavigate();

  return (
    <div className="border border-slate-300 w-[350px] p-10">
      <div onClick={() => navigate(`/product/${product.id}`)}>
        <img src={product.thumbnail} alt="" />
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="">
          <div className="flex gap-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <GoStarFill
                key={i}
                className={`text-yellow-400 ${
                  i < Math.round(product.rating) ? "" : "opacity-20"
                }`}
              />
            ))}

            <p className="mt-[-5px] text-gray-600">({product.stock})</p>
          </div>
          <p className="font-medium text-[16px]">{product.title}</p>
          <p className="font-semibold text-[28px]">$ {product.price}</p>
        </div>

        <div className="text-[#359740] flex justify-center items-center w-[50px] h-[50px] rounded-full border">
          <IoCartOutline size={30} />
        </div>
      </div>
    </div>
  );
});

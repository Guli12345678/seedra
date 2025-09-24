import { memo } from "react";
import halfleaf from "@/shared/assets/half-leaf.png";
import girl from "@/shared/assets/girl.jpg";

export const About = memo(() => {
  return (
    <div>
      <div className="container mx-auto mt-[32px] h-[287px] w-full overflow-hidden">
        <div className="w-full bg-[#EAF1EB]  rounded-[28px] p-15 text-center">
          <h3 className="text-[48px] font-semibold">
            Who we are and what we do
          </h3>
          <p className="w-[560px] flex justify-self-center">
            Here you can find a lot of interesting and useful information that
            you need in gardening and creating a beautiful garden
          </p>
          <img className="mt-[-100px] mr-50" src={halfleaf} alt="" />
        </div>
        <img className="mt-[-100px] mr-50" src={halfleaf} alt="" />
      </div>

      <div className="container mx-auto flex justify-between mt-30">
        <div>
          <h3 className="font-semibold w-[500px] text-[36px]">
            Seedra helps to grow fast and efficiant
          </h3>

          <p className="w-[521px] text-[#1F2533] mt-[31px]">
            SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
            professional instructions created by PhD Helga George <br /> <br />{" "}
            Be sure of our quality - the freshest batches of this season.
            Non-GMO, Heirloom - our seeds were tested and have the best
            germination ratings. <br /> Your easy growing experience is our
            guarantee Spinach commom culinary uses: salads, soups, smoothies,
            lasagne, pizza, pies, risotto, and more <br /> <br /> Proudly
            sourced in the USA - our garden seeds are grown, harvested, and
            packaged in the USA. We support local farmers and are happy to
            produce this American-made product
          </p>
        </div>

        <div className="border-8 border-slate-50 p-1 girl">
          <img
            className="rounded-full w-[500px] h-[500px] object-cover border-20 border-slate-50 "
            src={girl}
            alt=""
          />
        </div>
      </div>
    </div>
  );
});

import cilantro from "@/shared/assets/cilantro.png";
import fire from "@/shared/assets/fire.svg";
import ad from "@/shared/assets/ad.png";

export const Hero = () => {
  return (
    <div>
      <div className="bg-[#EAF1EB] w-full container rounded-2xl mx-auto mt-[32px]">
        <div className="flex w-full p-20">
          <div className="w-[650px]">
            <h2 className="font-semibold text-[#1F2533] text-[48px] leading-13">
              SEEDRA Basil Seeds for Indoor and Outdoor Planting
            </h2>
            <p className="mt-[12px] text-[#70737C] w-[500px]">
              Be sure of our quality - the freshest batches of this season.
              Non-GMO, Heirloom - our seeds were tested and have the best
              germination ratings. Your easy growing experience is our guarantee
            </p>
            <div className="flex gap-5 w-[194px] h-[55px] mt-[21px]">
              <img src={fire} alt="" />
              <h3 className="font-bold text-[#1F2533] text-[39px] leading-13">
                $12.56
              </h3>
              <h3 className="mt-3.5 line-through text-[22px] text-[#70737C] font-semibold">
                $15.56
              </h3>
            </div>
            <div className="flex gap-5 mt-[36px]">
              <button className=" w-[153px] rounded-[8px] h-[50px] bg-[#359740] text-white hover:bg-white hover:text-[#359740]">
                Add to cart
              </button>
              <button className="w-[153px] rounded-[8px] h-[50px] bg-[#359740] text-white hover:bg-white hover:text-[#359740]">
                Discover
              </button>
            </div>
          </div>
          <div className="">
            <div>
              <img className="" src={cilantro} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-10">
        <img className="w-full" src={ad} alt="" />
      </div>
    </div>
  );
};

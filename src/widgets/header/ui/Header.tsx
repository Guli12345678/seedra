import { memo } from "react";
import logo from "@/shared/assets/logo.svg";
import facebook from "@/shared/assets/facebook.svg";
import instagram from "@/shared/assets/instagram.svg";
import search from "@/shared/assets/search.svg";
import { Link } from "react-router-dom";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

export const Header = memo(() => {
  return (
    <div className=" mx-auto h-20  shadow-lg w-full flex items-center">
      <div className="container items-center flex justify-between mx-auto ">
        <div className="mr-10">
          <img src={logo} alt="" />
        </div>
        <ul className="flex gap-6">
          <li className="text-[#70737C] hover:text-black transition duration-300">
            <Link to={"/"}>ALL PRODUCTS</Link>
          </li>
          <li className="text-[#70737C] hover:text-black transition duration-300">
            <Link to={"/about"}>ABOUT SEEDRA</Link>
          </li>
          <li className="text-[#70737C] hover:text-black transition duration-300">
            <Link to={"/"}>OUR BLOG</Link>
          </li>
          <li className="text-[#70737C] hover:text-black transition duration-300">
            <Link to={"/"}>CONTACTS</Link>
          </li>
        </ul>
        <div className="flex gap-[24px]">
          <div className="flex gap-5 ml-10">
            <img width={24} src={instagram} alt="" />
            <img width={26} src={facebook} alt="" />
          </div>
          <div className="w-[350px] mt-[-5px] flex items-center h-[50px] gap-5  border border-slate-100 rounded-full p-2 ">
            <img className="p-5" src={search} alt="" />
            <input placeholder="Search" className="outline-0" type="text" />
          </div>
          <div className="flex ml-5 gap-5 mt-2">
            <IoIosHeartEmpty className="text-[#359740]" size={27} />
            <IoCartOutline className="text-[#359740]" size={27} />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
});

import React from "react";
import ProductCard from "./Helper/ProductCard";
const BestSelling=()=>{
    return(
        <div className="bg-gray-900 pt-[4rem] pb-[3rem]">
            <div className="w-[80%] mx-auto flex items-center justify-between">
            <h1 className="md:text-[28px] text-[22px] lg:text-[34px] text-white">Satuwda öňdäkiler</h1>
            <button className="uppercase text-[13px] md:text-[15px] text-yellow-300">Ählisini gör</button>
        </div>
        <div className="grid grid-cols-1 mt-[2rem] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 w-[80%] mx-auto">
            <div data-aos="fade-left" data-aos-anchor-placement="top-center"><ProductCard title="Mährem Çynar" actualPrice="59.99 TMT" discountPrice="49.99 TMT" category="Söýgi,Drama" image="/Images/MahremCynar.png"/></div>
            <div data-aos="fade-left" data-aos-delay="250"data-aos-anchor-placement="top-center"><ProductCard title="Ýaman Ykbal" actualPrice="39.99 TMT" discountPrice="29.99 TMT" category="Drama" image="/Images/Yaman Ykbal.png"/></div>
            <div data-aos="fade-left" data-aos-delay="500"data-aos-anchor-placement="top-center"><ProductCard title="Gumly Gelin" actualPrice="49.99 TMT" discountPrice="35.99 TMT" category="Komediýa" image="/Images/Gumly Gelin.png"/></div>
            <div data-aos="fade-left" data-aos-delay="750"data-aos-anchor-placement="top-center"><ProductCard title="Daragt" actualPrice="35.99 TMT" discountPrice="28.99 TMT" category="Öwüt-ündew häsiýetli" image="/Images/Daragt.png"/></div>
        </div>
        </div>
    )
}
export default BestSelling;
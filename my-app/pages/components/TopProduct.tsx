import React from "react";
import ProductCard from "./Helper/ProductCard";
const TopProduct=()=>{
    return(
        <div className="bg-gray-800 pt-[4rem] pb-[3rem]">
            <div className="w-[80%] mx-auto flex items-center justify-between">
                <h1 className="md:text-[28px] text-[22px] lg:text-[34px] text-white">Saýlanan kinolar</h1>
            <button className="uppercase text-[13px] md:text-[15px] text-yellow-400">Ählisini gör</button>
            </div>
            <div className="grid mt-[2rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 w-[80%] mx-auto">
            <div data-aos="fade-right" data-aos-anchor-placement="top-center"><ProductCard title="Zyýada" actualPrice="59.99 TMT" discountPrice="49.99 TMT" category="Söýgi,Drama" image="/Images/Zyyada.png"/></div>    
           <div data-aos="fade-right" data-aos-delay="250"data-aos-anchor-placement="top-center"><ProductCard title="Mährem Çynar" actualPrice="59.99 TMT" discountPrice="49.99 TMT" category="Söýgi,Drama" image="/Images/MahremCynar.png"/></div> 
           <div data-aos="fade-right" data-aos-delay="500"data-aos-anchor-placement="top-center"><ProductCard title="Ýaman Ykbal" actualPrice="39.99 TMT" discountPrice="29.99 TMT" category="Drama" image="/Images/Yaman Ykbal.png"/></div> 
           <div data-aos="fade-right" data-aos-delay="750"data-aos-anchor-placement="top-center"><ProductCard title="Ýuwaş Gelin" actualPrice="69.99 TMT" discountPrice="59.99 TMT" category="Komediýa" image="/Images/Yuwas gelin.png"/></div> 
        </div>
          </div>
    )
}
export default TopProduct;
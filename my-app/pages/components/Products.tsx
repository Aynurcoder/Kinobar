import React from "react";
import ProductsLider from "./Helper/ProductsLider";
const Products=()=>{
    return(
        <div className="pt-[6rem] pb-[3rem] bg-gray-900">
          <div className="w-[80%] mx-auto flex items-center justify-between">
            <h1 className="md:text-[28%] text-[22%] lg:text-[34px] text-white">
                Aýratyn maglumatlar
            </h1>
            <button className="uppercase text-[13px] md:text-[15px] text-yellow-300">
            Ählisini gör
            </button>
          </div>
        <div className="w-[80%] mt-[2rem] mx-auto">
            <ProductsLider/>
        </div>
            </div>
    )
}
export default Products;
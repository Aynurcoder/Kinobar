import { HeartIcon, ShoppingBagIcon, StarIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";
interface Props{
    image:string;
    category:string;
    title:string;
    discountPrice:string;
    actualPrice:string;
}
const ProductCard=({title,image,category,discountPrice,actualPrice}:Props)=>{
    return(
        <div>
            <div className="w-[100%] h-[200px]">
            <Image src={`${image}`}alt={title} width={350} height={200} className="w-[100%] h-[150%] object-cover md:w-[90%] md:h-[150%]"/>
            </div>
            <div className="mt-[7rem] w-[100%] md:w-[90%]">
            <div className="flex items-center justify-between">
            <p className="text-[14px] text-white opacity-70">{category}</p>
            <HeartIcon className="w-[1rem] h-[1rem] text-gray-500"/>
            </div>
            <h1 className="mt-[0.3rem] font-bold text-white opacity-85">{title}</h1>
            <div className="mt-[0.3rem] flex items-center">
            <StarIcon className="w-[1rem] h-[1rem] text-yellow-400"/>
            <StarIcon className="w-[1rem] h-[1rem] text-yellow-400"/>
            <StarIcon className="w-[1rem] h-[1rem] text-yellow-400"/>
            <StarIcon className="w-[1rem] h-[1rem] text-yellow-400"/>
            <StarIcon className="w-[1rem] h-[1rem] text-yellow-400"/>
            </div>
            <div className="mt-[0.3rem] flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <p className="text-[15px] line-through text-white opacity-60">{actualPrice}</p>
                    <p className="text-[16px] text-white opacity-75">{discountPrice}</p>
                </div>
                <ShoppingBagIcon className="w-[1.2rem] h-[1.2rem] text-orange-400"/>
            </div>
            </div>
        </div>
    )
}
export default ProductCard;
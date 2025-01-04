import Image from "next/image";
import React from "react";
const Foot=()=>{
    return(
        <div className="pt-[3rem] pb-[3rem] bg-gray-800">
        <div className="w-[80%] border-b-[1.2px] pb-[2rem] border-b-slate-500 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem]">
            <div>
                <h1 className="text-[25px] uppercase text-white mb-[1rem]">Türkmen Kinolary</h1>
                <p className="text-[14px] text-white opacity-60">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Enim, dolores ut! Molestiae nesciunt dicta fuga pariatur 
                    sit ut voluptate ab, corrupti, sunt sapiente deserunt facere vitae.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Enim, dolores ut! Molestiae nesciunt dicta fuga pariatur 
                    sit ut voluptate ab, corrupti, sunt sapiente deserunt facere vitae.
                </p>
                <p className="text-[14px] mt-[1.4rem] text-white opacity-80">(+993) 64121665 - taylyyewaaynur@gmail.com</p>
            </div>
            <div className="lg:mx-auto">
                <h1 className="text-[20px] text-white mb-[1.5rem]">Maglumatlar</h1>
                <p className="text-white text-[15px] opacity-70 mb-[1rem] w-fit cursor-pointer hover:text-yellow-400">Biz barada</p>
        </div>
        <div className="lg:mx-auto">
                <h1 className="text-[20px] text-white mb-[1.5rem]">Hasabym</h1>
                <p className="text-white text-[15px] opacity-70 mb-[1rem] w-fit cursor-pointer hover:text-yellow-400">Meniň sargytlarym</p>
                <p className="text-white text-[15px] opacity-70 mb-[1rem] w-fit cursor-pointer hover:text-yellow-400">Sargydy aýyrmak</p>
         </div>
         <div className="lg:mx-auto">
                <h1 className="text-[20px] text-white mb-[1.5rem]">Satuw</h1>
                <p className="text-white text-[15px] opacity-70 mb-[1rem] w-fit cursor-pointer hover:text-yellow-400">Satuwdaky kinolar</p>
                <p className="text-white text-[15px] opacity-70 mb-[1rem] w-fit cursor-pointer hover:text-yellow-400">Iň köp satylanlar</p>
                <p className="text-white text-[15px] opacity-70 mb-[1rem] w-fit cursor-pointer hover:text-yellow-400">Soňky goşulanlar</p>
         </div>
        </div>
        <div className="mt-[2rem] grid grid-cols-1 gap-[1.4rem] sm:grid-cols-2 justify-between w-[80%] mx-auto">
        <p className="text-[14px] text-white opacity-60">
        &#169;Copyright webdevwarriors 2024
        </p>
        <Image src="/Images/Horjun.png" alt="pay" width={230} height={230} className="object-contain sm:ml-auto"/>
        </div>
        </div>
    )
}
export default Foot;
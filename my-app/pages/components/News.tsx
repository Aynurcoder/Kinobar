import React from "react";
import NewsCard from "./NewsCard";
const News=()=>{
    return(
        <div className="pt-[5rem] pb-[3rem] bg-gray-800">
            <h1 className="w-[80%] mx-auto md:text-[28px] text-[22px] lg:text-[34px] text-white">Soňky täzelikler
            </h1>
            <div className="mt-[2rem]">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-[3rem] w-[80%] mx-auto">
            <NewsCard image="/Images/Yurekdes.png" title="Täze goşulanlar"/>
            <NewsCard image="/Images/Zyyada.png" title="Iň täzeleri gör "/>
            </div>
            </div>
        </div>
    )
}
export default News;
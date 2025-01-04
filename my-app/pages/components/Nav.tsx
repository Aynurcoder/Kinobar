import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";
const Nav=()=>{
    return(
        <div className="h-[13vh] bg-gray-800">
            <div className="w-[95%] md:w-[80%] mx-auto h-[100%] flex items-center justify-between">
            <div>
                <Image src="/Images/log.png" alt="logo" width={300} height={250}/>
            </div>
            <div className="h-[50%] hidden flex-[0.7] overflow-hidden bg-gray-200 rounded-md md:flex items-center ">
            <input type="text" placeholder="Gözleg" className="block pl-[0.5rem] w-[90%] outline-none mx-auto h-[100%] bg-gray-200"/>
            <MagnifyingGlassIcon className="w-[1.8rem] h-[1.8rem] mr-[1.4rem] cursor-pointer"/>
            </div>
            <div className="flex items-center justify-center space-x-8">
            <div className="relative">
            <ShoppingBagIcon className="w-[2rem] h-[2rem] text-white cursor-pointer"/>
            <div className="w-[20px] text-[12px] absolute top-[-7px] right-[-7px] h-[20px] flex items-center text-white justify-center font-semibold rounded-full bg-red-400">4</div>
            </div>
            <HeartIcon className="w-[2rem] h-[2rem] text-white cursor-pointer"/>
            <UserIcon className="w-[2rem] h-[2rem] text-white cursor-pointer"/>
            </div>
            </div>
            </div>
    
    )
}
export default Nav;
import React from "react";
const Hero=()=>{
  return(
    <div className="relative w-[100vw] h-[60vh] md:h-[87vh] bg"> 
      <div className="w-[90%] md:w-[80%] mx-auto h-[100%] flex flex-col items-start justify-center">
        <div data-aos="fade-right" className="text-white font-bold text-[25px] md:text-[30px] lg:text-[40px] uppercase">
        Islendik Türkmen Kinolaryňyzy şu ýerden satyn alyp bilersiňiz 
    </div>
    <p data-aos="fade-left" data-aos-delay="200" className="text-white md:text-[14px] md:text-[18px] w-[90%] lg:w-[55%] mt-[1rem] md:mt-[0.2rem] mb-[1rem] opacity-75">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Reprehenderit laborum iure hic magnam quis suscipit reiciendis a consequatur illum expedita 
        recusandae nihil exercitationem architecto, est assumenda? Consequatur libero rem provident?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam optio aut facere quo. Accusantium, vel? 
        Aut in explicabo minima ut fuga labore numquam mollitia facilis.Lorerum impedit mollitia voluptatum velit!
    </p>
    <div data-aos="zoom-in" data-aos-delay="400">
        <button className="before:ease bg-white text-[17px] relative h-12 w-40 overflow-hidden border 
        border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48
        before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90
        before:bg-blue-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black
        hover:before:-rotate-180">
            <span className="relative z-10">Satyn al</span>
        </button>
    </div>
      </div>
    </div>
  )
}
export default Hero;
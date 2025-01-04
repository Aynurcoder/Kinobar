import React, { useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Products from "./components/Products";
import TopProduct from "./components/TopProduct";
import BestSelling from "./components/BestSelling";
import News from "./components/News";
import Contact from "./components/Contact";
import Foot from "./components/Foot";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Homepage=()=>{
 useEffect(()=>{
  AOS.init({
    duration:1000,
    easing:"ease",
    once:true,
    anchorPlacement:"top-bottom",
  })
 },[])
  return(
    <div className="overflow-x-hidden">
      <Nav/>
      <Hero/>
      <Products/>
      <TopProduct/>
      <BestSelling/>
      <News/>
      <Contact/>
      <Foot/>
    </div>
  )
}
export default Homepage;
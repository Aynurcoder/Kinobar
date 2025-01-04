import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from "./ProductCard";
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1300, min: 764 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
const ProductsLider=()=>{
    return(
        <Carousel
        additionalTransfrom={0} 
        arrows={true} 
        autoPlay={true} 
        autoPlaySpeed={5000} 
        centerMode={false}
        infinite
        responsive={responsive}
        itemClass="item"
        >
            <ProductCard title="Mährem Çynar" actualPrice="59.99 TMT" discountPrice="49.99 TMT" category="Söýgi,Drama" image="/Images/MahremCynar.png"/>
            <ProductCard title="Ýaman Ykbal" actualPrice="39.99 TMT" discountPrice="29.99 TMT" category="Drama" image="/Images/Yaman Ykbal.png"/>
            <ProductCard title="Gumly Gelin" actualPrice="49.99 TMT" discountPrice="35.99 TMT" category="Komediýa" image="/Images/Gumly Gelin.png"/>
            <ProductCard title="Daragt" actualPrice="35.99 TMT" discountPrice="28.99 TMT" category="Öwüt-ündew häsiýetli" image="/Images/Daragt.png"/>
            <ProductCard title="Ýuwaş Gelin" actualPrice="69.99 TMT" discountPrice="59.99 TMT" category="Komediýa" image="/Images/Yuwas gelin.png"/>
            <ProductCard title="Ýürekdeş" actualPrice="45.99 TMT" discountPrice="35.99 TMT" category="Ynsan bilen haýwanyň arasyndaky baglanyşyk" image="/Images/Yurekdes.png"/>
            <ProductCard title="Zyýada" actualPrice="59.99 TMT" discountPrice="49.99 TMT" category="Söýgi,Drama" image="/Images/Zyyada.png"/>
        </Carousel>
    )
}
export default ProductsLider;
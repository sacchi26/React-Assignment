import React from "react";
import Slider from "react-slick";
import a1 from "./img/a1.png"
import a2 from "./img/a2.png"
import a3 from "./img/a3.png"
import a4 from "./img/a4.png"
import a5 from "./img/a5.png"
import a6 from "./img/a6.png"
import a7 from "./img/a7.png"
import a8 from "./img/a8.png"
import a9 from "./img/a9.png"
import a10 from "./img/a10.png"
import a11 from "./img/a11.png"
import a12 from "./img/a12.png"
import a13 from "./img/a13.png"

function Slider3() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container" style={{width:"100%", margin:"auto", borderRadius:"20px" }}>
      <Slider {...settings}>
        <div>
          <img src={a1} alt="" />
        </div>
        <div>
          <img src={a2} alt="" />
        </div>
        <div>
          <img src={a3} alt="" />
        </div>
        <div>
          <img src={a4} alt="" />
        </div>
        <div>
          <img src={a5} alt="" />
        </div>
        <div>
          <img src={a6} alt="" />
        </div>
        <div>
          <img src={a7} alt="" />
        </div>
        <div>
          <img src={a8} alt="" />
        </div>
        <div>
          <img src={a9} alt="" />
        </div>
        <div>
          <img src={a10} alt="" />
        </div>
        <div>
          <img src={a11} alt="" />
        </div>
        <div>
          <img src={a12} alt="" />
        </div>
        <div>
          <img src={a13} alt="" />
        </div>
        
      </Slider>
    </div>
  );
}

export default Slider3;

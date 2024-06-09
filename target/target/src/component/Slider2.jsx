import React from "react";
import Slider from "react-slick";
import sl1 from "./img/sl1.png"
import sl2 from "./img/sl2.png"
import sl3 from "./img/sl3.png"
import sl4 from "./img/sl4.png"
import sl5 from "./img/sl5.png"
import sl6 from "./img/sl6.png"
import b1 from "./img/b1.png"
function Slider2() {
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
    <>


    <div className="slider-container" style={{width:"80%", margin: "auto",backgroundColor:"#60B1E7",padding:"20px"}}>
        <h1 style={{textAlign:"center", fontSize:"30px", fontWeight:"bold", padding:"10px"}}>Dad’s day grilling faves</h1>


      <Slider {...settings}>
        <div>
          <img src={sl1} alt="" />
        </div>
        <div>
          <img src={sl2} alt="" />
        </div>
        <div>
          <img src={sl3} alt="" />
        </div>
        <div>
          <img src={sl4} alt="" />
        </div>
        <div>
          <img src={sl5} alt="" />
        </div>
        <div>
          <img src={sl6} alt="" />
        </div>
       
        
        
      </Slider>

    </div>
    <br />
    <img style={{width:"80%", margin:"auto"}} src="https://tpc.googlesyndication.com/simgad/9036890538421347084?" alt="" />
    <br />
    <img style={{width:"80%", margin:"auto"}} src={b1} alt="" />



    </>






  );
}

export default Slider2;

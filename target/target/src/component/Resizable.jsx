import  { useState } from "react";
import Slider from "react-slick";
import s1 from "./img/s1.png"
import s2 from "./img/s2.png"
import s3 from "./img/s3.png"
import s4 from "./img/s4.png"
import s5 from "./img/s5.png"
import s6 from "./img/s6.png"
import s7 from "./img/s7.png"
import s8 from "./img/s8.png"
import s9 from "./img/s9.png"
import s10 from "./img/s10.png"
import s11 from "./img/s11.png"
import s12 from "./img/s12.png"
import s13 from "./img/s13.png"
import s14 from "./img/s14.png"
import s15 from "./img/s15.png"

function Resizable() {
  const [display, setDisplay] = useState(true);
  const [width, setWidth] = useState(600);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">  
      <div
        style={{
          width: width + "px",
          display: display ? "block" : "none",
          margin:"auto",
          width:"80%",
          backgroundColor:"lightblue",
          padding:"10px"

        }}
      >
        <Slider {...settings}>
          <div>
            <img src={s1} alt="" />
          </div>
          <div>
            <img src={s2} alt="" />
          </div>
          <div>
            <img src={s3} alt="" />
          </div>
          <div>
            <img src={s4} alt="" />
          </div>
          <div>
            <img src={s5} alt="" />
          </div>
          <div>
            <img src={s6} alt="" />
          </div>
          <div>
            <img src={s7} alt="" />
          </div>
          <div>
            <img src={s8} alt="" />
          </div>
          <div>
            <img src={s9} alt="" />
          </div>
          <div>
            <img src={s10} alt="" />
          </div>
          <div>
            <img src={s11} alt="" />
          </div>
          <div>
            <img src={s12} alt="" />
          </div>
          <div>
            <img src={s13} alt="" />
          </div>
          <div>
            <img src={s14} alt="" />
          </div>
          <div>
            <img src={s15} alt="" />
          </div>
          
        </Slider>
      </div>
      <br />
      <div style={{margin:"auto",
          width:"80%",
          }}>
      <img src="https://tpc.googlesyndication.com/simgad/17899936785216094059?" alt="" />

      <h1 style={{fontWeight:"bold",
          textAlign:"center",
          fontSize:"40px"
          }}>The best deals for the best dads</h1>
      
    </div>
    </div>



  );
}

export default Resizable;

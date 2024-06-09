import React from "react";
import c1 from "./img/c1.png"
import c2 from "./img/c2.png"
import c3 from "./img/c3.png"
import c4 from "./img/c4.png"
import c5 from "./img/c5.png"
import c6 from "./img/c6.png"
import c7 from "./img/c7.png"
import c8 from "./img/c8.png"

function Card() {
  return (
    <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)" , width:"80%" , margin:"auto", gap:"10px"}}>
      <img style={{borderRadius:"20px"}} src={c1} alt="" />
      <img style={{borderRadius:"20px"}} src={c2} alt="" />
      <img style={{borderRadius:"20px"}} src={c3} alt="" />
      <img style={{borderRadius:"20px"}} src={c4} alt="" />
      <img style={{borderRadius:"20px"}} src={c5} alt="" />
      <img style={{borderRadius:"20px"}} src={c6} alt="" />
      <img style={{borderRadius:"20px"}} src={c7} alt="" />
      <img style={{borderRadius:"20px"}} src={c8} alt="" />
      
    </div>
  );
}

export default Card;

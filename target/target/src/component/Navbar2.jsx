import React from "react";

const Navbar2 = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px", padding:"10px", position:"sticky",top:"0", zIndex:"1", backgroundColor:"white"}}>
      <div className="flex items-center gap-10 , font-bold" >
        <img
          src="https://www.target.com/icons/assets/decorative/light/BullseyeRed.svg"
          alt=""
          className="w-10"
        />
        <p>Categories</p>
        <p>Deals</p>
        <p>New & Featured</p>
        <p>PickUp & Delivery</p>
       </div>
      <div style={{width:"30%", position:"relative",right:"22px"}}>
        <input
          type="text"
          placeholder="what can we help you find?"
          style={{width:"100%", border:"none",padding:"10px",borderRadius:"5px", backgroundColor:"whitesmoke"}}
        />
        <i class="fa-solid fa-microphone" style={{position:"absolute", left:"85%", top:"10px"}} ></i>
        <i class="fa-solid fa-magnifying-glass" style={{position:"absolute", left:"90%", top:"10px"}}></i>
      </div>

      <div className="flex gap-5">
        <i class="fa-solid fa-user"></i>
        <p>Sign in</p>
        <i class="fa-solid fa-cart-shopping"></i>
      </div>
    </div>
  );
};

export default Navbar2;

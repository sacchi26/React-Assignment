import React from 'react'
import data from "./db.json"
import k1 from "./img/k1.png"
import k2 from "./img/k2.png"
function Shop() {
  return (
    <>
    <h1 style={{textAlign:"center", fontSize:"30px", fontWeight:"bold", padding:"10px"}}>Featured categories</h1>
    <p style={{textAlign:"center", fontSize:"20px",  padding:"10px"}} href="#">Shop all</p>
    <div style={{display:"grid", gridTemplateColumns:"repeat(6,1fr)",width:"80%", margin:" 60px auto ", gap:"10px"}}>
      {data.categories.map((e)=>(
        <div key={e.id} style={{textAlign:"center"}}>
            <img src={e.src} alt="" />
            <p>{e.lable}</p>
        </div>
      ))}
    </div>

    <br />
    <img style={{width:"80%", margin:"auto"}}  src={k1} alt="" />

    <br />
    <img style={{width:"80%", margin:"auto"}} src={k2} alt="" />
    </>
  )
}

export default Shop

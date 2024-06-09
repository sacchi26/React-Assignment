import React from 'react'
import g1 from "./img/g1.png"
import g2 from "./img/g2.png"
import g3 from "./img/g3.png"
import g4 from "./img/g4.png"
import ss1 from "./img/ss1.png"
import ss2 from "./img/ss2.png"
import b2 from "./img/b2.png"
import b3 from "./img/b3.png"

function Gift() {
  return (
    <>
      <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)" , width:"80%" , margin:"auto", gap:"10px"}}>
      <img style={{borderRadius:"20px"}} src={g1} alt="" />
      <img style={{borderRadius:"20px"}} src={g2} alt="" />
      <img style={{borderRadius:"20px"}} src={g3} alt="" />
      <img style={{borderRadius:"20px"}} src={g4} alt="" />
    </div>

    <br />
    <img style={{width:"80%", margin:"auto"}} src={ss1} alt="" />

    <br />
    <img style={{width:"80%", margin:"auto"}} src={ss2} alt="" />

    <br />
    <img style={{width:"80%", margin:"auto"}}  src={b2} alt="" />

    <br />
    <img style={{width:"80%", margin:"auto"}} src={b3} alt="" />

    </>

  )
}

export default Gift

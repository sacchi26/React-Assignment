import React from 'react'
import Ban1 from "./img/Ban1.png"
import Slider3 from './Slider3'

function Banner2() {
  return (
    <div > 
      <div style={{backgroundColor:"lightgray", padding:"20px", width:"80%", margin:"auto"}} >
        <img style={{margin:"auto", width: "100%", borderRadius:"20px"}} src={Ban1} alt="" />
      </div>
      <div style={{backgroundColor:"lightgray",padding:"20px", width:"80%", margin:"auto" }}>
        <Slider3/>
      </div>
    </div>
  )
}

export default Banner2

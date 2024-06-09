import React from 'react'


const Banner = () => {
  return (
    <div>
      <div style={{marginTop:"60px", position:"relative"}}>
        <img src="https://target.scene7.com/is/image/Target/GUEST_7791fcc9-51e3-4658-a9c5-2c89e172253d?wid=2160&qlt=80&fmt=webp" alt="" style={{width:"80%" , margin:"auto"}} />
        <p style={{position:"absolute",left:"15%", bottom: "30%",fontSize:"24px", textDecoration:"underline", width:"20%" }}>Day-Making gifts for all kinds of dads.</p>
        <p style={{position:"absolute",left:"15%", bottom: "15%", border:"1px solid black", padding:"10px", backgroundColor:"white", textDecoration:"underline"}}>Father's Day Gifts</p>
      </div>
      <div style={{width:"80%", textAlign:"center", margin:"auto",backgroundColor:"lightblue"}}>
        <h1 style={{fontWeight:"bold", fontFamily:"sans-serif", fontSize:"30px"}}>Top gifts to celebrate Dad</h1>
      </div>
      

    </div>
  )
}

export default Banner

import React from 'react'

function Sign() {
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:"20px", gap:"10px"}}> 
      <h3 style={{fontWeight:"bold", fontSize:"24px"}}>Get top deals, latest trends, and more.</h3>
      <input style={{border:"1px solid black", width:"20%", padding:"10px",}} type="text" placeholder='Email address' />
      <button style={{backgroundColor:"red", color:"white", padding:"10px", borderRadius:"5px"}}>Sign Up</button>
      <p>Privacy Policy</p>
    </div>
  )
}

export default Sign

import React from 'react'
import k3 from "./img/k3.png"

function Footer() {
  return (
    <div>
      <div style={{display:"flex", justifyContent:"space-between", padding:"20px", backgroundColor:"whiteSmoke", color:"gray" }}>
        <ul>
            <p style={{fontWeight:"bold", fontSize:"20px", color:"black"}}>About us</p>
            <li>About Target</li>
            <li>Careers</li>
            <li>News & Blog</li>
            <li>Target Brands</li>
            <li>Bullseye Shop</li>
            <li>Sustainability & Governance</li>
            <li>Press Center</li>
            <li>Advertise with Us</li>
            <li>Investors</li>
            <li>Affiliates & Partners</li>
            <li>Suppliers</li>
            <li>TargetPlus</li>
        </ul>
        <ul>
            <p style={{fontWeight:"bold", fontSize:"20px" , color:"black"}}>Help</p>
            <li>Target Help</li>
            <li>Returns</li>
            <li>Track Orders</li>
            <li>Recalls</li>
            <li>Contact Us</li>
            <li>FeedBack</li>
            <li>Accessibility</li>
            <li>Security & Fraud</li>
            <li>Team Member Services</li>
        </ul>
        <ul>
            <p style={{fontWeight:"bold", fontSize:"20px", color:"black"}}>Stores</p>
            <li>Find a Store</li>
            <li>Clinic</li>
            <li>Pharmacy</li>
            <li>Optical</li>
        </ul>
        <ul>
            <p style={{fontWeight:"bold", fontSize:"20px", color:"black"}}>Services</p>
            <li>Target Circle™</li>
            <li>Target Circle™ Card</li>
            <li>Target Circle 360™</li>
            <li>Target App</li>
            <li>Registry</li>
            <li>Same Day Delivery</li>
            <li>Oder PickUp</li>
            <li>Driver Up</li>
            <li>Free 2-Day Shipping </li>
            <li>Shipping & Delivery</li>
            
        </ul>
      </div>
      <img src={k3} alt="" />
    </div>
  )
}

export default Footer

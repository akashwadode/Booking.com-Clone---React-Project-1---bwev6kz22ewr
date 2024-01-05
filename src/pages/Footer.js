import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/footer.css"
const Footer = () => {
  const [email,setEmail] = useState('');
  const handleEmailSubmit =(e)=>{
    e.preventDefault();
    window.alert("Thank you for support!")
    setEmail("");
  }
  return (
    <div className="footer-main-container">
      <h3>Save time, save money!</h3>
      <p>Sign up and we'll send the best deals for you</p>
      <form onSubmit={handleEmailSubmit} >
        <input type="email" placeholder="your email" value={email} onChange={(e)=>{
          setEmail(e.target.value);
        }} required/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Footer;

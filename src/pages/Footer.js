import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/footer.css"
const Footer = () => {
  const navigate = useNavigate();
  const handleEmailSubmit =(e)=>{
    e.preventDefault();
     window.alert("Thank you for support!")
  }
  return (
    <div className="footer-main-container">
      <h3>Save time, save money!</h3>
      <p>Sign up and we'll send the best deals for you</p>
      <form onSubmit={handleEmailSubmit} >
        <input type="email" placeholder="your email" required/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Footer;

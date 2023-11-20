import React from "react";
import Logo from '../../images/booking-ar21.svg'
import { useNavigate } from "react-router-dom";
const LoginNav = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <img src={Logo} alt="website-logo" id="website-logo" onClick={()=>{
          navigate('/');
        }}/>
      </nav>
    </div>
  );
};

export default LoginNav;

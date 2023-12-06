import React from "react";
import "./styles/thanksPage.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ThanksPage = () => {
  const navigate = useNavigate();
  return (
    <div className="thanks-main-container">
      <div>
        <CheckCircleIcon sx={{ fontSize: "80px", color: "green" }} />
        <h1>Thank You !</h1>
        <Button variant="contained" id="home-btn" onClick={()=>{
          navigate('/');
        }}>Go Home</Button>
      </div>
    </div>
  );
};

export default ThanksPage;

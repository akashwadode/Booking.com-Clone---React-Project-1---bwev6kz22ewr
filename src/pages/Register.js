import React, { useEffect, useState } from "react";

import LoginNav from "../components/Navbar_Compoennts/LoginNav";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userData);
    createUser();
    
  };

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    appType: "bookingportals",
  });
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const url = "https://academics.newtonschool.co/api/v1/bookingportals/signup";
  const requestOptions = {
    method: "POST",
    headers: {
      projectId: "bwev6kz22ewr",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  };
  function createUser() {
    fetch(url, requestOptions)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.status);
        if (data.status !== "success") {
          console.log("fail");
          window.alert("User already exist !!");

        }else{
          window.alert("User account created");
          navigate('/login');
        }
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <div>
      <div id="formDiv">
        <form onSubmit={submitHandler} method="post">
          <h3>Sign Up</h3>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            type="text"
            onChange={inputHandler}
            value={userData.name}
            required
          />
          <label htmlFor="email">Email address</label>
          <input
            name="email"
            id="email"
            type="email"
            onChange={inputHandler}
            value={userData.email}
            required
          />
          <label htmlFor="email">Password</label>
          <input
            name="password"
            id="password"
            type="password"
            onChange={inputHandler}
            value={userData.password}
            required
          />
          <Button id="continueBtn" variant="contained" type="submit">
            Create Account
          </Button>
        </form>
        <p
          id="signIn"
          onClick={() => {
            navigate("/login");
          }}
        >
          Sign In?
        </p>
      </div>
    </div>
  );
};

export default Register;

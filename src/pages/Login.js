import React, { useContext, useState } from "react";
import "../styles/Login.css";

import LoginNav from "../components/LoginNav";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MyContext from "../components/MyContext";

const Login = () => {
  const {user,setUser} = useContext(MyContext)
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    userLogin();
  };
  const [invalidMsg, setInvalidMsg] = useState(false);
  function loginMsgToggle() {
    setInvalidMsg(true);
    setTimeout(() => {
      setInvalidMsg(false);
    }, 3000);
  }
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    appType: "bookingportals",
  });
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const url = "https://academics.newtonschool.co/api/v1/bookingportals/login";
  const requestOptions = {
    method: "POST",
    headers: {
      "projectId": "bwev6kz22ewr",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  };

  const userLogin = () => {
    fetch(url, requestOptions)
      .then((res) => {
        if (!res.ok) {
          loginMsgToggle();
          throw new Error("Fetch Data Error");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        if(data.token){
          sessionStorage.setItem("userToken",`${data.token}`);
          sessionStorage.setItem("userName",`${data.data.name}`)
          setUser(data.name);
          navigate('/');
        }
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <LoginNav />
      <div id="formDiv">
        <form onSubmit={submitHandler} method="post">
          <h3>Sign In</h3>
          <label htmlFor="email">Email address</label>
          <input
            name="email"
            id="email"
            type="email"
            onChange={inputHandler}
            value={loginData.email}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            name="password"
            id="password"
            type="password"
            onChange={inputHandler}
            value={loginData.password}
            required
          />
          <Button
            id="continueBtn"
            type="submit"
            variant="contained"
          >
            Continue
          </Button>
        </form>
        <p
          id="signUp"
          onClick={() => {
            navigate("/register");
          }}
        >
          Sign up ?
        </p>
        {invalidMsg && <p id="invalidMsg">Invalid email or password!</p>}
      </div>
    </div>
  );
};
export default Login;

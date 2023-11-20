import React, { useContext, useEffect, useRef, useState } from "react";

import { Avatar, Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Profile = () => {
  const navigate = useNavigate();
  const { isLoggedIn,setIsLoggedIn } = useContext(AuthContext);
  const [isClicked, setIsClicked] = useState(false);

  const hoverStyle = {
    display: isClicked ? "block" : "none",
  };
  const iconClickHandler = () => {
    setIsClicked(!isClicked);
  };

  const userLogOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("userToken");
    localStorage.removeItem("userName");
    navigate("/");
  };
  return (
    <div className="profile-icon-container">
      {!isLoggedIn ? (
        <Button
          onClick={() => {
            navigate("/login");
          }}
          variant="outlined"
        >
          Sign In
        </Button>
      ) : (
        <>
          <Avatar onClick={iconClickHandler} src="/broken-image.jpg" />
          <span>{localStorage.getItem("userName")}</span>
          <Stack
            direction="row"
            spacing={2}
            id="profile-menu"
            style={hoverStyle}
          >
            <Paper>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>My Account</MenuItem>
                <MenuItem onClick={userLogOut}>Logout</MenuItem>
              </MenuList>
            </Paper>
          </Stack>
        </>
      )}
    </div>
  );
};

export default Profile;

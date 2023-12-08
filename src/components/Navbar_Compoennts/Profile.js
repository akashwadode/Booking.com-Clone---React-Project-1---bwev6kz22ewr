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
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
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
        <div id="navbar-right-container">
          <div className="menu-main-container">
            {" "}
            <Avatar onClick={iconClickHandler} src="/broken-image.jpg" />
            <div className="menu-container">
              {" "}
              <Stack
                direction="row"
                spacing={2}
                id="profile-menu"
                style={hoverStyle}
              >
                <Paper>
                  <MenuList>
                    <MenuItem onClick={userLogOut}>Logout</MenuItem>
                  </MenuList>
                </Paper>
              </Stack>
            </div>
          </div>
          <div><b>{localStorage.getItem("userName")}</b></div>
        </div>
      )}
    </div>
  );
};

export default Profile;

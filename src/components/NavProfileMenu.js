import React, { useEffect, useRef, useState } from "react";
import { deepOrange } from "@mui/material/colors";
import { Avatar } from "@mui/material";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import "./../styles/profilelogo.css";

const NavProfileMenu = () => {
  const [isHovered,setIsHovered] = useState(false);

  const hoverStyle = {
    display : isHovered ? 'block' : 'none'
  }
 const iconClickHandler = ()=>{
    setIsHovered(!isHovered);
 }
  return (
    <div className="profile-icon-container">
    <Avatar sx={{ bgcolor: deepOrange[500] }} onClick={iconClickHandler}
    >N</Avatar>
      <Stack direction="row" spacing={2} id='profile-menu' style={hoverStyle}>
        <Paper>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>My Account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Paper>
      </Stack></div>
  )
}

export default NavProfileMenu;
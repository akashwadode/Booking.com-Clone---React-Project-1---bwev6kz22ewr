import React from 'react'
import logo from './images/booking-ar21.svg'
import { Button } from '@mui/material'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='navbar-container'>
        <div className='logo-container'>
            <div> <img src={logo} onClick={()=>{
              navigate('/');
            }}/></div>
            <div>
                <Button onClick={()=>{
                  navigate('/login');
                }} variant="outlined" >Sign In</Button>
            </div>
        </div>
        <div className='navlink-container'>
           <div>Stays</div>
           <div>Flights</div>
        </div>

    </div>
  )
}

export default Navbar
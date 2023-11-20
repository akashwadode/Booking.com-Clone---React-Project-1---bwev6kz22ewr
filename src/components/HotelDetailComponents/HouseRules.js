import React from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutline';
import PetsIcon from '@mui/icons-material/Pets';
import InfoOutlinedIcon from '@mui/icons-material/Info';
const HouseRules = ({hotelData}) => {
    const iconStyle = {fontSize : 14,
    }
  return (
    <>
        <h3>House rules</h3>
        <table>
            <tr>
                <th><InfoOutlinedIcon sx={iconStyle} />Cancellation</th>
                <td>{hotelData.rooms[0].cancellationPolicy}</td>
            </tr>
            <tr>
                <th><PersonOutlineOutlinedIcon sx={iconStyle}/>Age restriction</th>
                <td>The minimum age for check-in is 18</td>
            </tr>
            <tr>
                <th><PetsIcon sx={iconStyle}/>Pets</th>
                <td>Pets are {hotelData.houseRules.restrictions.petsAllowed ? "allowed":"not allowed"} </td>
            </tr>
        </table>
    </>
  )
}

export default HouseRules
import React from "react";
import PriceDetails from "./PriceDetails";
import BedIcon from '@mui/icons-material/Bed';
import { AspectRatio } from "@mui/icons-material";
const RoomTable = ({ roomData }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Room Type</th>
          <th>Room Cost</th>
          <th>Discount</th>
          <th>Other</th>
        </tr>
      </thead>
      <tbody>
        {roomData.map((item) => {
          return (
            <tr>
              <td>
                <h4>{item.roomType} Room</h4>
                <div>{item.bedDetail}  <BedIcon fontSize="small"/></div>
                <p><AspectRatio sx={{fontSize:12 }}/> {item.roomSize} m&#178;</p>
              </td>
              <td>
                <PriceDetails costDetails={item.costDetails} />
              </td>
              <td>
                {item.costDetails.discount == 0 ? (
                  "No Discount"
                ) : (
                  <div>{item.costDetails.discount}%</div>
                )}
              </td>
              <td>. Non-refundable</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default RoomTable;

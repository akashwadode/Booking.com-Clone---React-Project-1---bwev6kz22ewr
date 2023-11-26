import React from "react";
import PriceDetails from "./PriceDetails";
import BedIcon from "@mui/icons-material/Bed";
import { AspectRatio } from "@mui/icons-material";
import { Button } from "@mui/base/Button";
import { useNavigate } from "react-router-dom";
const RoomTable = ({ rooms }) => {
  const navigate = useNavigate();
  const reserveRoomHandle = (e) => {
    const roomNumberSelect = e.target.getAttribute("roomNumber");
    navigate("/checkout", { state: rooms[roomNumberSelect] });
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Room Type</th>
          <th>Room Cost</th>
          <th>Discount</th>
          <th>Other</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {rooms.map((item, index) => {
          return (
            <tr key={index}>
              <td>
                <h4>{item.roomType} Room</h4>
                <div>
                  {item.bedDetail} <BedIcon fontSize="small" />
                </div>
                <p>
                  <AspectRatio sx={{ fontSize: 12 }} /> {item.roomSize} m&#178;
                </p>
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
              <td>
                <Button roomNumber={index} onClick={reserveRoomHandle}>
                  Reserve
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default RoomTable;

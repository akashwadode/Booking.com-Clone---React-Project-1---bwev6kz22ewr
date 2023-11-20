import React from "react";
import StarIcon from "@mui/icons-material/StarRounded";
import StarHalfIcon from "@mui/icons-material/StarHalfRounded";
import StarOutlineIcon from "@mui/icons-material/StarOutlineRounded";
import { orange, yellow } from "@mui/material/colors";
const RatingStar = (prop) => {
  let starCount = prop.star;
  const RenderStar = () => {
    const starStyle = {fontSize:16, color: orange[400]};
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (starCount > 0 && starCount < 1) {
        stars.push(<StarHalfIcon sx={starStyle} key={i} />);
      } else if (starCount > 0) {
        stars.push(<StarIcon key={i} sx={starStyle}/>);
      } else {
        stars.push(<StarOutlineIcon key={i} sx={starStyle}/>);
      }
      starCount--;
    }
    return <div>{stars}</div>;
  };
  return <>{prop.star > 0 ? <RenderStar /> : <div>no rating</div>}</>;
};

export default RatingStar;

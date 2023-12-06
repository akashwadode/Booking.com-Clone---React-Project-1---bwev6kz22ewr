import React from "react";

const PriceDetails = ({costDetails}) => {
  return (
    <>
      <h3 className="base-cost">
        <span>&#8377; </span>
        {costDetails.baseCost}
      </h3>
      <p className="taxesAndCharges">
        +<span>&#8377; </span>
        {costDetails.taxesAndFees} taxes and charges
      </p>
    </>
  );
};

export default PriceDetails;

import React from "react";

const CountOption = ({
  onAdultIncrement,
  onAdultDecrement,
  onChildIncrement,
  onChildDecrement,
}) => {
  return (
    <div className="option-menu">
      <div className="option adult-option">
        <div>Adults</div>
        <div className="option-btn-container">
          <button
            type="button"
            className="option-button"
            onClick={onAdultIncrement}
          >
            +
          </button>
          <button
            type="button"
            className="option-button"
            onClick={onAdultDecrement}
          >
            -
          </button>
        </div>
      </div>
      <div className="option child-option">
        <div>Children</div>
        <div className="option-btn-container">
          <button
            type="button"
            className="option-button"
            onClick={onChildIncrement}
          >
            +
          </button>
          <button
            type="button"
            className="option-button"
            onClick={onChildDecrement}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountOption;

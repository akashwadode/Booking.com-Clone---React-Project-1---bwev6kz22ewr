import React, { useState } from "react";
import AuthNavigator from "../Auth/AuthNavigator";
import "./styles/checkout.css";
import { useLocation, useNavigate } from "react-router-dom";

const CheckOut = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const currentRoomData = state;

  const [cvvNumber, setCvvNumber] = useState(100);
  const handleCvvNumberInput = (e) => {
    setCvvNumber(e.target.value);
  };
  function handleFormSubmit(e) {
    e.preventDefault();
    navigate("/booked");
  }
  function totalCost() {
    const costDetails = currentRoomData.costDetails;
    const total =
      costDetails.baseCost + costDetails.taxesAndFees - costDetails.discount;
    return total;
  }
  return (
    <>
      <AuthNavigator />
      <div className="main-container">
        {/* PAYMENT DETAILS */}
        <form id="payment-section" onSubmit={handleFormSubmit}>
          <h2>Payment</h2>
          <label htmlFor="cardName">Card Holder Name</label>
          <input id="cardName" type="text" name="cardName" required />

          <label htmlFor="cardNumber">Card Number</label>
          <input
            id="cardNumber"
            type="number"
            placeholder="0000-0000-0000"
            name="cardNumber"
            required
          />
          <div>
            {" "}
            <label htmlFor="expiryYear">Expiry Year</label>
            <select id="expiryYear" required>
              <option hidden>YYYY</option>
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
              <option>2027</option>
              <option>2028</option>
            </select>
          </div>
          <div>
            <label htmlFor="expiryMonth">Expiry Month</label>
            <select id="endDate" className="form-control" required>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>{" "}
            <label htmlFor="cvvNumber">CVV</label>
            <input
              id="cvvNumber"
              name="cvvNumber"
              type="number"
              min={100}
              max={999}
              onChange={handleCvvNumberInput}
              value={cvvNumber}
              required
            />
          </div>

          <br></br>
          <input type="submit" />
        </form>

        {/* ORDER DETAILS */}
        {currentRoomData && (
          <section id="order-section">
            <h3>Order Details</h3>
            <p>
              <span>Base cost-</span>{" "}
              <span>&#8377;{currentRoomData.costDetails.baseCost}</span>
            </p>
            <p>
              <span>Taxes-</span>{" "}
              <span>&#8377;{currentRoomData.costDetails.taxesAndFees}</span>
            </p>
            <p>
              <span>Discount-</span>{" "}
              <span>&#8377;{currentRoomData.costDetails.discount}</span>
            </p>
            <p>
              <b>Total-</b>
              <b>&#8377;{totalCost()}</b>
            </p>
          </section>
        )}
      </div>
    </>
  );
};

export default CheckOut;

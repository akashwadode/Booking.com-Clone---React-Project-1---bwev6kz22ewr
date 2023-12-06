import React from "react";

const ImageGallery = ({ imageData }) => {
  return (
    <div className="hotel-details-image-container">
      {imageData && (
          imageData.map((item) => (
            <div className="hote-details-image-div">
            <img
              key={item}
              src={item}
              alt="hotel-image"
              className="hotel-details-image"
            />
            </div>
          ))

      )}
    </div>
  );
};

export default ImageGallery;

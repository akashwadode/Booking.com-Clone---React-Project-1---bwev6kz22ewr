import React from "react";

const ImageGallery = ({ imageData }) => {
  console.log(imageData);
  return (
    <>
      {imageData && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          {imageData.map((item) => (
            <img
              key={item}
              src={item}
              alt="hotel-image"
              width={"200px"}
              height={"200px"}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ImageGallery;

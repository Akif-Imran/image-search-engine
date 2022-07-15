import React from "react";

const ImageList = ({ images }) => {
  return (
    <div>
      {images.map(({ urls, alt_description, id }) => (
        <img src={urls.regular} alt={alt_description} key={id} />
      ))}
    </div>
  );
};

export default ImageList;

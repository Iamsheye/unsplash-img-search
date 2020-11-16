import React from "react";

const Image = ({img}) => {
  return (
    <div>
      <img
        src={img.urls.regular}
        alt={img.alt_description}
        width="100%"
      />
    </div>
  )
}

export default Image;
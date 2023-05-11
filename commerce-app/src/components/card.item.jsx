import React from "react";

const Carditem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div className="category col-md-3 col-sm-4 col-xs-6">
      <div className="img-box d-flex flex-column justify-content-center">
        <img className="w-100" src={imageUrl} alt="" />
      </div>
      <div className="category-content-box text-center">
        <h1>{title}</h1>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default Carditem;

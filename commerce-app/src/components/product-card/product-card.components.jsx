import React from "react";
import Button from "../button/button.componnet";

const ProductCard = ({ products }) => {
  const { name, price, imgUrl } = products;
  return (
    <div className="col-md-2">
      <div className="image-box">
        <img className="w-100" src={imgUrl} alt={`${name}`} />
      </div>
      <div className="content-box">
        <h6 className="product-name">{name}</h6>
        <p className="product-price">{price}</p>
        <Button buttonType="invert">Add to Card</Button>
      </div>
    </div>
  );
};

export default ProductCard;

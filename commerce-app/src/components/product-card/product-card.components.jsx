import React, { useContext } from "react";
import Button from "../button/button.componnet";
import { CardContext } from "../../context/card.context";

const ProductCard = ({ products }) => {
  const { name, price, imageUrl } = products;

  const {addItemCart} = useContext(CardContext); 
  const addProductToCard = () => addItemCart(products); 
  
  return (
    <div className="col-md-2 col-sm-6 col-xs-6 mt-3">
      <div className="image-box">
        <img className="w-100" src={imageUrl} alt={`${name}`} />
      </div>
      <div className="content-box">
        <h6 className="product-name">{name}</h6>
        <p className="product-price">{price}</p>
        <Button buttonType="productButton" onClick={addProductToCard}>Add to Card</Button>
      </div>
    </div>
  );
};

export default ProductCard;

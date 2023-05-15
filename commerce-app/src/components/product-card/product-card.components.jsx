import React, { useContext } from "react";
import Button from "../button/button.componnet";
import { CardContext } from "../../context/card.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemCart } = useContext(CardContext);

  const addProductToCart = () => addItemCart(product);

  return (
    <>
      <div className="image-box">
        <img className="w-100" src={imageUrl} alt={name} />
      </div>
      <div className="content-box">
        <h6 className="product-name">{name}</h6>
        <p className="product-price">{price}</p>
        <Button buttonType="productButton" onClick={addProductToCart}>
          Add to Cart
        </Button>
      </div>
    </>
  );
};

export default ProductCard;

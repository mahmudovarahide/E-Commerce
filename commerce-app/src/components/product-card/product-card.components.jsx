import React, { useContext } from "react";
import Button from "../button/button.componnet";
import { CardContext } from "../../context/card.context";
import { NavLink } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemCart } = useContext(CardContext);

  const addProductToCart = () => addItemCart(product);

  return (
    <>
      <NavLink to={`/products/${product.id}`}>
        <div className="image-box">
          <img className="w-100" src={imageUrl} alt={name} />
        </div>
        <div className="content-box">
          <h6 className="product-name">{name}</h6>
          <p className="product-price">{price}</p>
        </div>
      </NavLink>
      <Button buttonType="productButton" onClick={addProductToCart}>
        Add to Cart
      </Button>
    </>
  );
};

export default ProductCard;

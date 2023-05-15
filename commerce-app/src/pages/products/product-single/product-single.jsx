import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../../context/categories.context";

const ProductSingle = () => {
  const { id } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  let product = null;
  Object.keys(categoriesMap).forEach((categoryKey) => {
    const category = categoriesMap[categoryKey];
    const foundProduct = category.find(
      (product) => product.id === parseInt(id)
    );
    if (foundProduct) {
      product = foundProduct;
    }
  });

  if (!product) {
    return <div className="container">
      <h6>Məhsul tapılmadı</h6>
    </div>;
  }

  const { name, imageUrl, price } = product;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 image-box">
          <img src={imageUrl} alt={name} className="w-75" />
        </div>
        <div className="col-md-6 content-box">
          <h2>{name}</h2>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductSingle;

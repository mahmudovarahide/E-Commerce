import React, { Fragment, useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";
import ProductCard from "../../components/product-card/product-card.components";

const Products = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <section className="my-4 products">
            <div className="container">
              <h3 className="heading fw-bold">{title}</h3>
              <div className="row">
                {categoriesMap[title].map((product) => (
                  <ProductCard key={product.id} products={product} />
                ))}
              </div>
            </div>
          </section>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Products;

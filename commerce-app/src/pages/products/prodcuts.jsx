import { useContext } from "react";
import { ProductsContext } from "../../context/products.context";
import ProductCard from "../../components/product-card/product-card.components";

const Products = () => {
  const { products } = useContext(ProductsContext);
  return (
    <section className="mt-4">
      <div className="container">
        <h3 className="heading fw-bold">Products</h3>
        <div className="row">
            {products.map((product) => (
              <ProductCard key={product.id} products={product} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

import React, { useContext, useState } from "react";
import { CategoriesContext } from "../../context/categories.context";
import { Tab, Nav } from "react-bootstrap";
import ProductCard from "../../components/product-card/product-card.components";

const Products = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <section className="my-4 products">
      <div className="container">
        <Tab.Container activeKey={activeTab}>
          <Nav variant="tabs">
            {Object.keys(categoriesMap).map((title, index) => (
              <Nav.Item key={index}>
                <Nav.Link eventKey={index} onClick={() => setActiveTab(index)}>
                  {title}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
          <Tab.Content>
            {Object.keys(categoriesMap).map((title, index) => (
              <Tab.Pane key={index} eventKey={index}>
                <h3 className="heading fw-bold mt-4">{title}</h3>
                <div className="row">
                  {categoriesMap[title].map((product) => (
                    <div key={product.id} className="col-md-2 col-sm-6 col-xs-6 my-3">
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
      </div>
    </section>
  );
};

export default Products;

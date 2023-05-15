import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../../context/categories.context';

const ProductSingle = () => {
  const { id } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  let product = null;
  Object.keys(categoriesMap).forEach(categoryKey => {
    const category = categoriesMap[categoryKey];
    const foundProduct = category.find(product => product.id === id);
    if (foundProduct) {
      product = foundProduct;
    }
  });

  if (!product) {
    return <div>Ürün bulunamadı</div>;
  }

  const { name, imageUrl } = product;

  return (
    <div>
      <h2>{name}</h2>
      <img src={imageUrl} alt={name} />
    </div>
  );
};
export default ProductSingle

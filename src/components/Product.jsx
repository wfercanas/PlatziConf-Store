import React from 'react';
import '../styles/components/Products.css';

const Product = ({ product, handleAddToCart }) => {
  return (
    <div className="Products-item">
      <img src={product.image} alt={product.title} />
      <div className="Product-item-info">
        <h2>{product.title}</h2>
        <span>$ {product.price}</span>
        <p>{product.description}</p>
      </div>
      <button type="button" onClick={() => handleAddToCart(product)}>
        Comprar
      </button>
    </div>
  );
};

export { Product };

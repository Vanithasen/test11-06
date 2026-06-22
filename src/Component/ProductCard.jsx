import React from "react";

function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      <img
        src={product.thumbnail}
        alt={product.title}
      />

      <h3>{product.title}</h3>

      <p>₹ {product.price}</p>

      <button
        onClick={() =>
          addToCart(product)
        }
      >
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;
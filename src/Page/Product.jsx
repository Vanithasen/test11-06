import React, { useState, useEffect } from "react";
import ProductCard from "../Component/ProductCard";
import Card from "../Component/Card";

import "./Product.css";

function Product() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch(
      "https://dummyjson.com/products"
    );

    const data = await response.json();
    console.log(data);
    setProducts(data.products);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>E-Commerce Product Catalog</h1>

      <input
        type="text"
        placeholder="Search Product..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="search"
      />

      {/*<Card count={cart.length} />*/}

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Product;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../services/Api";

import "./styles.css";

export default function Main() {
  const [products, setProducts] = useState([]);

  async function loadProducts() {
    await api.get("/").then(response => {
      setProducts(response.data);
    });
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <article>
          <strong>{product.nome}</strong>
          <p>{product.tipo}</p>
          <Link to={`/product/${product.id}`}>Acessar</Link>
        </article>
      ))}
    </div>
  );
}

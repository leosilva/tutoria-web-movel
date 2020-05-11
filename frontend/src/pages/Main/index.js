import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import api from "../../services/Api";

import "./styles.css";

export default function Main() {
  const [products, setProducts] = useState([]);
  const [productInfo, setProductInfo] = useState({});
  const [page, setPage] = useState(1);

  async function loadProducts(page) {
    await api
      .get("/", {
        params: { page }
      })
      .then(response => {
        setProducts(response.data.data);
        setProductInfo(response.data.pagination);
        setPage(parseInt(response.data.pagination.currentPage, 10));
      });
  }

  useEffect(() => {
    loadProducts(1);
  }, []);

  function nextPage() {
    if (page === productInfo.lastPage) {
      return;
    }

    const pageNumber = parseInt(page, 10) + 1;
    loadProducts(pageNumber);
  }

  function prevPage() {
    if (page === 1) {
      return;
    }

    const pageNumber = parseInt(page, 10) - 1;
    loadProducts(pageNumber);
  }

  return (
    <div className="product-list">
      <div className="actions">
        <Link to="/product/new">
          <FaPlus size={18} color="#fff" />
        </Link>
      </div>
      {products.map(product => (
        <article key={product.id}>
          <strong>{product.nome}</strong>
          <p>{product.tipo}</p>
          <Link to={`/product/${product.id}`}>Acessar</Link>
        </article>
      ))}
      <div className="actions">
        <button disabled={page === 1} onClick={prevPage}>
          Anterior
        </button>
        <button disabled={page === productInfo.lastPage} onClick={nextPage}>
          Próximo
        </button>
      </div>
    </div>
  );
}

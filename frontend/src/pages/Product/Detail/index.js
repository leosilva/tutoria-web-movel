import React, { useState, useEffect } from "react";
import api from "../../../services/Api";
import { useHistory } from "react-router-dom";

import "./styles.css";

export default function ProductDetail(props) {
  const [product, setProduct] = useState({});
  const history = useHistory();

  async function loadProduct() {
    const id = props.match.params.id;
    await api.get(`/product/${id}`).then(response => {
      setProduct(response.data);
    });
  }

  function back() {
    history.goBack();
  }

  async function deleteProduct() {
    const resposta = window.confirm(
      "Tem certeza de que deseja apagar este produto?"
    );

    if (resposta) {
      await api.delete(`/product/${product.id}`);
      history.push("/");
    }
  }

  useEffect(() => {
    loadProduct();
  });

  function updateProduct() {
    history.push(`/product/update`, product);
  }

  return (
    <div className="product-info">
      <h1>{product.nome}</h1>
      <p>{product.tipo}</p>
      <p>{product.descricao}</p>
      <div className="actions">
        <button onClick={back}>Voltar</button>
        <div>
          <button onClick={updateProduct}>Editar</button>
          <button className="delete" onClick={deleteProduct}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

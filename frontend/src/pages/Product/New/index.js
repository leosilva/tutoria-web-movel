import React, { useState } from "react";
import api from "../../../services/Api";
import { useHistory } from "react-router-dom";

import "./styles.css";

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    await api.post("/product", product);
    history.push("/");
  }

  function back() {
    history.push("/");
  }

  function fillProduct(e) {
    let tempProduct = {};
    const nameObtido = e.target.name;
    const valueObtido = e.target.value;
    tempProduct[nameObtido] = valueObtido;
    const mergeProduct = { ...product, ...tempProduct };
    setProduct(mergeProduct);
  }

  return (
    <div className="product-div">
      <h1>Novo Produto</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          id="nome"
          placeholder="Nome"
          onChange={e => fillProduct(e)}
        />
        <input
          type="text"
          name="tipo"
          id="tipo"
          placeholder="Tipo"
          onChange={e => fillProduct(e)}
        />
        <input
          type="text"
          name="descricao"
          id="descricao"
          placeholder="Descrição"
          onChange={e => fillProduct(e)}
        />
        <div className="actions">
          <button type="button" onClick={back}>
            Cancelar
          </button>
          <button type="submit">Salvar</button>
        </div>
      </form>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import api from "../../../services/Api";
import { useHistory } from "react-router-dom";

import "./styles.css";

export default function ProductForm(props) {
  const [product, setProduct] = useState({});
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (props.formMethod === "post") {
      await api.post("/product", product);
    } else if (props.formMethod === "put") {
      await api.put(`/product/${product.id}`, product);
    }

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

  useEffect(() => {
    if (props.product) {
      setProduct(props.product);
    }
  }, []);

  return (
    <div className="product-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          id="nome"
          placeholder="Nome"
          onChange={e => fillProduct(e)}
          defaultValue={product.nome || ""}
        />
        <input
          type="text"
          name="tipo"
          id="tipo"
          placeholder="Tipo"
          onChange={e => fillProduct(e)}
          defaultValue={product.tipo || ""}
        />
        <input
          type="text"
          name="descricao"
          id="descricao"
          placeholder="Descrição"
          onChange={e => fillProduct(e)}
          defaultValue={product.descricao || ""}
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

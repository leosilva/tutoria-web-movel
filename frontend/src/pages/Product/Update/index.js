import React from "react";
import ProductForm from "../Form/index";
import { useLocation } from "react-router-dom";

export default function Update() {
  const location = useLocation();

  return (
    <div className="product-div">
      <h1>Editar Produto</h1>
      <ProductForm
        formRoute="/product"
        formMethod="put"
        product={location.state}
      />
    </div>
  );
}

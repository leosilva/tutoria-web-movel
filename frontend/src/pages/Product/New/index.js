import React from "react";
import ProductForm from "../Form/index";

import "./styles.css";

export default function NewProduct() {
  return (
    <div className="product-div">
      <h1>Novo Produto</h1>
      <ProductForm formRoute="/product" formMethod="post" />
    </div>
  );
}

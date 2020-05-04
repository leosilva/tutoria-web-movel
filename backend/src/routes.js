const express = require("express");
const routes = express.Router();
const ProductController = require("./controllers/ProductController");

// Rotas para o produto
routes.get("/", ProductController.list);
routes.get("/product/:id", ProductController.findById);
routes.post("/product", ProductController.save);
routes.put("/product/:id", ProductController.update);
routes.delete("/product/:id", ProductController.delete);

module.exports = routes;

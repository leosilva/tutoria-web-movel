const express = require("express");
const cors = require("cors");
const routes = require("./routes");

// usando o expressjs
const app = express();

// fazendo com que a aplicacao use o CORS
app.use(cors());

// permitindo que a aplicacao use formato JSON
app.use(express.json());

// usando as rotas definidas em outro arquivo
app.use(routes);

// defininindo a porta que a aplicacao ira escutar
app.listen("3000");

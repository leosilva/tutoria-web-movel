const connection = require("../database/connection");

module.exports = {
  async save(request, response) {
    const [id] = await connection("product").insert(request.body);
    return response.json({ id });
  },

  async list(request, response) {
    const productList = await connection("product").select("*");
    return response.json(productList);
  },

  async update(request, response) {
    const idParametro = request.params.id;
    await connection("product")
      .update(request.body)
      .where({
        id: idParametro
      });
    return response.status(200).json({
      message: "Atualização feita com sucesso!"
    });
  },

  async delete(request, response) {
    const idParametro = request.params.id;
    await connection("product")
      .del()
      .where({
        id: idParametro
      });
    return response.status(200).json({
      message: "Deleção feita com sucesso!"
    });
  }
};

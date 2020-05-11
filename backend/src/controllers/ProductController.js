const connection = require("../database/connection");
const { attachPaginate } = require("knex-paginate");
attachPaginate();

module.exports = {
  async save(request, response) {
    const [id] = await connection("product").insert(request.body);
    return response.json({ id });
  },

  async list(request, response) {
    const { page = 1 } = request.query;
    const productList = await connection("product")
      .select("*")
      .paginate({
        perPage: 5,
        currentPage: page,
        isLengthAware: true
      });
    return response.json(productList);
  },

  async findById(request, response) {
    const idObtido = request.params.id;
    const [product] = await connection("product")
      .select("*")
      .where({
        id: idObtido
      });

    return response.json(product);
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

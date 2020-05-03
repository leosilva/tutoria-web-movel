const connection = require("knex")({
  client: "sqlite3",
  connection: {
    filename: "./src/database/database.sqlite"
  }
});

module.exports = connection;

const mysql = require("mysql");
//connexion à mysql

const connection = mysql.createConnection({
  username: "root",
  password: "jecode4wcs",
  database: "users",
  port: 3307,
//   host: "127.0.0.1"
  host: "localhost"
});

module.exports = connection;

const mysql = require("mysql");
//connexion à mysql

const connection = mysql.createConnection({
  user: "root",
  password: "jecode4wcs",
  database: "react",
  port: 3306,
  host: "localhost"
});

module.exports = connection;

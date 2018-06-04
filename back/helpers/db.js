const mysql = require("mysql");
//connexion à mysql

const connection = mysql.createConnection({
  username: "root",
  password: "jecode4wcs",
  database: "react",
  port: 3306,
  host: "127.0.0.1"
});

module.exports = connection;

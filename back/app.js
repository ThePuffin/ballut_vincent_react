//je déclare l'ensemble des librairies nécessaires
const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const connection = require("./helpers/db.js");
const flash = require("req-flash");
const cookieParser = require("cookie-parser");
const session = require("express-session");

app.use(cookieParser());
app.use(session({ secret: "123" }));
//je configure l'application
app.use(flash());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
//import de auth.js
const authRouter = require("./routes/auth/auth");
app.use("/auth", authRouter);

//j'implémentation la partie API
app.get("/", (req, res) => {
  res.send("I'll be back !");
});

// routage signup
// app.get("/signup", (req, res) => {
//   res.send("Hello signup!");
// });

/// dans le cas d'une route non trouvée, je retourne le code 404 'Not Found'
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

//je lance le serveur node
let server = app.listen(process.env.PORT || 5000, function() {
  console.log("Listening on port " + server.address().port);
});

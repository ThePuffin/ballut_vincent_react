const express = require("express");
const router = express();
const connection = require("../../helpers/db");

//route en post pour signup
router.post("/signup", (req, res, next) => {
  // console.log(req.body);
  let user = {
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    lastname: req.body.lastname
  };

  let query = connection.query(
    "INSERT INTO users SET ?",
    user,
    (error, results, fields) => {
      if (error) {
        console.log(error);
        return res.status(500).end();
      } else {
        console.log("tout va bien");
        return res.end();
      }
    }
  );
  // res.send("I am in Post signup");
});

// //route en get pour /signup
// router.get("/signup", (req, res, net) => {
//   res.send("tu es en get !!!!");
// });

module.exports = router;

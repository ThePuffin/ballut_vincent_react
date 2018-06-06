const express = require("express");
const router = express();
const connection = require("../../helpers/db");

//route en post pour signup
router.post("/signup", (req, res, err) => {
  console.log(err);
  let user = {
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    lastname: req.body.lastname
  };

  let query = connection.query(
    "INSERT INTO users SET ?",
    user,
    function (error, result) {
      // console.log(err);

      if (error) {
        console.log("erreur")
        // return res.status(500).end();
        return res.status(500).json({ flash: error.message });
      } else {
        console.log("ok");
        // return res.end();
        return res.status(200).json({ flash: "user has been signup" });
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



/////////////////////////////////////////////////////////////////////////////////

const express = require("express");
const router = express();
const connection = require("../../helpers/db.js");

//route en post pour signup
router.post("/signup", (req, res, next) => {
  //   console.log(req.body);
  const post = {
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    lastname: req.body.lastname
  };

  const query = connection.query("INSERT INTO users SET ?", post, function(
    error,
    results,
    fields
  ) {
    console.log(error);
    if (error) {
      console.log("erreur");
      // return res.status(500).end();
      res.status(500).json({ flash: error.message });
    } else {
      console.log("ok");
      // return res.end();
      res.status(200).json({ flash: "user has been signup" });
    }

    res.end();
  });
  //   res.send("I am in Post signup");
});

// //route en get pour /signup
// router.get("/signup", (req, res, net) => {
//   res.send("tu es en get !!!!");
// });

module.exports = router;

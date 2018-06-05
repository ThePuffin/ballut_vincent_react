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

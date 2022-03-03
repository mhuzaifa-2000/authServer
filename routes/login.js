const router = require("express").Router();
const bcrypt = require("bcrypt");
const env = process.env;
const { User } = require("../models/index");

router.post("/", (req, res) => {
  const { email, password } = req.body;
  const saltRounds = env.SALT_ROUNDS;

  User.findAll({
    where: {
      email: email,
    },
  }).then((response) => {
    if (response[0]) {
      bcrypt.compare(password, response[0].password, function (err, result) {
        if (result) {
          res.status(200).json({
            ...response[0],
            success: true,
          });
        } else {
          return res.json({
            success: false,
            message: "passwords do not match",
          });
        }
      });
    } else {
      return res.json({
        success: false,
        message: "email incorrect",
      });
    }
  });
});
module.exports = router;

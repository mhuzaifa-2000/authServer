const router = require("express").Router();
const bcrypt = require("bcrypt");
const env = process.env;
const { User } = require("../models/index");

router.post("/", (req, res) => {
  const { email, firstName, lastName, password } = req.body;
  const saltRounds = env.SALT_ROUNDS;
  var hashedPassword = "";
  bcrypt.hash(password, 10).then((hash) => {
    User.build({
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: hash,
    })
      .save()
      .then((response) => {
        res.status(200).json(response);
      })
      .catch((err) => res.status(400).json(err));
  });
});

module.exports = router;

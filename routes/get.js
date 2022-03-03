const router = require("express").Router();
const { User } = require("../models/index");

router.get("/:id", (req, res) => {
  const { id } = req.params;
  User.findAll({
    where: {
      id: id,
    },
  })
    .then((response) => {
      res.status(200).json({
        ...response[0],
        success: true,
      });
    })
    .catch((err) => {
      res.json({ ...err, success: false });
    });
});
module.exports = router;

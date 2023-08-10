const express = require("express");
const router = express.Router();

router.delete("/car/:id", (req, res) => {
  const id = Number(req.params.id);
  const _cars = [...req.cars];

  if (isNaN(id)) {
    res.send({ status: 0, error: "invalid ID" });
  }

  const indexOf = _cars.findIndex((item) => {
    return item.id == id;
  });

  if (indexOf < 0) {
    res.send({ status: 0, error: "ID not found" });
  }

  req.cars.splice(indexOf, 1);

  res.send({ status: 1 });
});

module.exports = router;

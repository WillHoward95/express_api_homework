const express = require("express");
const router = express.Router();

router.post("/car", (req, res) => {
  const { year, make, model, type } = req.body;

  if (
    !year ||
    !make ||
    !model ||
    !type ||
    typeof year !== "number" ||
    typeof make !== "string" ||
    typeof model !== "string" ||
    typeof type !== "string"
  ) {
    res.send({ status: 0, error: "incomplete info" });
  }

  const indexOf = req.cars.findIndex((item) => {
    return item.model === model;
  });

  if (indexOf >= 0) {
    res.send({ status: 0, error: "item already added" });
    return;
  }

  req.cars.push({
    id: Math.round(Math.random() * 100000000),
    year: year,
    make: make,
    model: model,
    type: type,
  });

  res.send({ status: 1 });
});

module.exports = router;

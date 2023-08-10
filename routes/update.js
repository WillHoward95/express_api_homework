const express = require("express");
const router = express.Router();

router.patch("/car/:id", (req, res) => {
  const id = Number(req.params.id);
  const { year, make, model, type } = req.body;

  if (isNaN(id)) {
    res.send({ status: 0, error: "invalid ID" });
    return;
  }

  const indexOf = req.cars.findIndex((item) => {
    return item.id === id;
  });

  if (indexOf < 0) {
    res.send({ status: 0, error: "ID not found" });
    return;
  }

  if (year && typeof year === "number") {
    req.cars[indexOf].year = year;
  }
  if (make && typeof make === "string") {
    req.cars[indexOf].make = make;
  }
  if (model && typeof model === "string") {
    req.cars[indexOf].model = model;
  }
  if (type && typeof type === "string") {
    req.cars[indexOf].type = type;
  }
  res.send({ status: 1 });
});

module.exports = router;

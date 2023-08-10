const express = require("express");
const router = express.Router();

router.get("/cars", (req, res) => {
  res.send({ status: 1, cars: req.cars });
});

router.get("/car/:id", (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    res.send({ status: 0, error: "invalid ID" });
  }
  const _cars = [...req.cars];

  const car = _cars.find((item) => {
    return item.id === Number(req.params.id);
  });

  if (!car) {
    res.send({ status: 0, error: "ID not found" });
  }

  res.send({ status: 1, car });
});

module.exports = router;

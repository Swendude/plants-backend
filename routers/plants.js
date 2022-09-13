const { Router } = require("express");
const Plants = require("../models").plants;
const Waterings = require("../models").waterings;
const router = new Router();

router.get("/", async (req, res) => {
  const allPlants = await Plants.findAll({
    include: { model: Waterings },
    order: [[Waterings, "date", "desc"]]
  });
  res.send(allPlants);
});

router.get("/:id", async (req, res) => {
  const onePlant = await Plants.findByPk(req.params.id, {
    include: { model: Waterings },
    order: [[Waterings, "date", "desc"]]
  });
  res.send(onePlant);
});

router.patch("/water/:id", async (req, res) => {
  const { date } = req.body;
  await Waterings.create({
    plantId: req.params.id,
    date: date
  });
  res.send("Watering added");
});

module.exports = router;

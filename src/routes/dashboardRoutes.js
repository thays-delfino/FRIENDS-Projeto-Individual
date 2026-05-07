var express    = require("express");
var router     = express.Router();
var controller = require("../controllers/dashboardController");

router.get("/kpis",   function (req, res) { controller.getKpis(req, res); });
router.get("/pizza",  function (req, res) { controller.getGraficoPizza(req, res); });
router.get("/personagens", function (req, res) { controller.getPersonagens(req, res); });

module.exports = router;
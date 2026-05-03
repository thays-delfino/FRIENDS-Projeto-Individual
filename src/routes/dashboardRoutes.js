var express    = require("express");
var router     = express.Router();
var controller = require("../controllers/dashboardController");

router.get("/kpis",   function (req, res) { controller.getKpis(req, res); });
router.get("/pizza",  function (req, res) { controller.getGraficoPizza(req, res); });
router.get("/linha",  function (req, res) { controller.getGraficoLinha(req, res); });

module.exports = router;
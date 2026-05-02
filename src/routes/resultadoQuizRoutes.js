var express = require("express");
var router  = express.Router();

var resultadoQuizController = require("../controllers/resultadoQuizController");

router.post("/salvar", function (req, res) {
    resultadoQuizController.salvar(req, res);
});

module.exports = router;
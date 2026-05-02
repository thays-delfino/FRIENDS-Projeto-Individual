var express    = require("express");
var router     = express.Router();
var controller = require("../controllers/resultadoPersonalidadeController");

router.post("/salvar", function (req, res) {
    controller.salvar(req, res);
});

module.exports = router;
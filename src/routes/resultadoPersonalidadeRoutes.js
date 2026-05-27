var express    = require("express"); // importa o framework Express
var router     = express.Router(); // cria um roteador do Express para definir as rotas
var controller = require("../controllers/resultadoPersonalidadeController"); // importa o controller do teste de personalidade

router.post("/salvar", function (req, res) { // define a rota POST /personalidade/salvar
    controller.salvar(req, res); // quando acessada, chama a função salvar do controller
});
// é POST pois está recebendo dados do frontend para salvar no banco

module.exports = router; // exporta o roteador para ser usado no app.js
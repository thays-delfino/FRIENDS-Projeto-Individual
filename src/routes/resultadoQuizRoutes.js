var express = require("express"); // importa o framework Express
var router  = express.Router(); // cria um roteador do Express para definir as rotas

var resultadoQuizController = require("../controllers/resultadoQuizController"); // importa o controller do quiz

router.post("/salvar", function (req, res) { // define a rota POST /quiz/salvar
    resultadoQuizController.salvar(req, res); // quando acessada, chama a função salvar do controller
});
// é POST pois está recebendo os dados de pontuação do frontend para salvar no banco

module.exports = router; // exporta o roteador para ser usado no app.js
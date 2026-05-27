var express = require("express"); // importa o framework Express
var router = express.Router(); // cria um roteador do Express para definir as rotas

var usuarioController = require("../controllers/usuarioController"); // importa o controller de usuário

router.post("/cadastrar", function (req, res) { // define a rota POST /usuarios/cadastrar
    usuarioController.cadastrar(req, res); // quando acessada, chama a função cadastrar do controller
});
// é POST pois está recebendo os dados do formulário de cadastro para salvar no banco

router.post("/autenticar", function (req, res) { // define a rota POST /usuarios/autenticar
    usuarioController.autenticar(req, res); // quando acessada, chama a função autenticar do controller
});
// é POST pois está recebendo email e senha do formulário de login para verificar no banco

module.exports = router; // exporta o roteador para ser usado no app.js
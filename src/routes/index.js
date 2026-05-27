var express = require("express"); // importa o framework Express
var router = express.Router(); // cria um roteador do Express para definir as rotas

router.get("/", function (req, res) { // define a rota GET "/" — página inicial da aplicação
    res.render("index"); // renderiza o arquivo index para o usuário
});

module.exports = router; // exporta o roteador para ser usado no app.js
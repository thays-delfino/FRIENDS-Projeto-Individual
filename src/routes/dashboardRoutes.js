var express    = require("express"); // importa o framework Express
var router     = express.Router(); // cria um roteador do Express para definir as rotas
var controller = require("../controllers/dashboardController"); // importa o controller do dashboard que contém as funções

router.get("/kpis", function (req, res) { controller.getKpis(req, res); });
// define a rota GET /dashboard/kpis — quando acessada, chama a função getKpis do controller

router.get("/pizza", function (req, res) { controller.getGraficoPizza(req, res); });
// define a rota GET /dashboard/pizza — quando acessada, chama a função getGraficoPizza do controller

router.get("/personagens", function (req, res) { controller.getPersonagens(req, res); });
// define a rota GET /dashboard/personagens — quando acessada, chama a função getPersonagens do controller

router.get("/ranking", function (req, res) { controller.getRanking(req, res); });
// define a rota GET /dashboard/ranking — quando acessada, chama a função getRanking do controller

module.exports = router; // exporta o roteador para ser usado no app.js
var dashboardModel = require("../models/dashboardModel"); // importa o model do dashboard que contém as queries SQL

function getKpis(req, res) { // função que busca os KPIs do dashboard
    dashboardModel.getKpis() // chama a função getKpis do model que executa a query no banco
        .then(function (resultado) { res.json(resultado[0]); }) // quando o banco responder, envia apenas o primeiro objeto do resultado (pois é uma única linha)
        .catch(function (erro) { res.status(500).json(erro.sqlMessage); }); // se der erro no banco, retorna status 500 com a mensagem do erro
}

function getGraficoPizza(req, res) { // função que busca os dados do gráfico de pizza
    dashboardModel.getGraficoPizza() // chama a função getGraficoPizza do model que executa a query no banco
        .then(function (resultado) { res.json(resultado); }) // quando o banco responder, envia todos os resultados (array com vários personagens)
        .catch(function (erro) { res.status(500).json(erro.sqlMessage); }); // se der erro no banco, retorna status 500 com a mensagem do erro
}

function getPersonagens(req, res) { // função que busca os personagens mais tirados no teste
    dashboardModel.getPersonagens() // chama a função getPersonagens do model que executa a query no banco
        .then(function (resultado) { res.json(resultado); }) // quando o banco responder, envia todos os resultados
        .catch(function (erro) { res.status(500).json(erro.sqlMessage); }); // se der erro no banco, retorna status 500 com a mensagem do erro
}

function getRanking(req, res) { // função que busca o ranking dos usuários com maior pontuação
    dashboardModel.getRanking() // chama a função getRanking do model que executa a query no banco
        .then(function (resultado) { res.json(resultado); }) // quando o banco responder, envia todos os resultados
        .catch(function (erro) { res.status(500).json(erro.sqlMessage); }) // se der erro no banco, retorna status 500 com a mensagem do erro
}

module.exports = { getKpis, getGraficoPizza, getPersonagens, getRanking }; // exporta todas as funções para serem usadas nas rotas
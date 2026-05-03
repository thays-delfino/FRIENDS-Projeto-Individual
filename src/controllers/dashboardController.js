var dashboardModel = require("../models/dashboardModel");

function getKpis(req, res) {
    dashboardModel.getKpis()
        .then(function (resultado) { res.json(resultado[0]); })
        .catch(function (erro) { res.status(500).json(erro.sqlMessage); });
}

function getGraficoPizza(req, res) {
    dashboardModel.getGraficoPizza()
        .then(function (resultado) { res.json(resultado); })
        .catch(function (erro) { res.status(500).json(erro.sqlMessage); });
}

module.exports = { getKpis, getGraficoPizza };
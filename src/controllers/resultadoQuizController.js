var resultadoQuizModel = require("../models/resultadoQuizModel");

function salvar(req, res) {
    var idUsuario = req.body.idUsuario;
    var pontuacao = req.body.pontuacao;
    var total     = req.body.total;

    resultadoQuizModel.salvar(idUsuario, pontuacao, total)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log("Erro ao salvar resultado do quiz: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    salvar
};
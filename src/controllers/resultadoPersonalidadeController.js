var model = require("../models/resultadoPersonalidadeModel");

function salvar(req, res) {
    console.log("body recebido:", req.body);
    var idUsuario  = req.body.idUsuario;
    var personagem = req.body.personagem;
    var identificacao = req.body.identificacao;

    model.salvar(idUsuario, personagem, identificacao)
        .then(function (resultado) { res.json(resultado); })
        .catch(function (erro) { res.status(500).json(erro.sqlMessage); });
}

module.exports = { salvar };
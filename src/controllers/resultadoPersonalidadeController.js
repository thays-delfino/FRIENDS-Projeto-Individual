var model = require("../models/resultadoPersonalidadeModel");

function salvar(req, res) {
    var idUsuario  = req.body.idUsuario;
    var personagem = req.body.personagem;

    model.salvar(idUsuario, personagem)
        .then(function (resultado) { res.json(resultado); })
        .catch(function (erro) { res.status(500).json(erro.sqlMessage); });
}

module.exports = { salvar };
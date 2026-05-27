var resultadoQuizModel = require("../models/resultadoQuizModel"); // importa o model que contém as queries SQL do quiz

function salvar(req, res) { // função que salva o resultado do quiz
    var idUsuario = req.body.idUsuario; // pega o id do usuário enviado pelo frontend
    var pontuacao = req.body.pontuacao; // pega a pontuação do usuário enviada pelo frontend
    var total     = req.body.total;     // pega o total de perguntas enviado pelo frontend

    resultadoQuizModel.salvar(idUsuario, pontuacao, total) // chama a função salvar do model passando os três valores
        .then(function (resultado) {
            res.json(resultado); // quando o banco responder, envia o resultado de volta para o frontend
        })
        .catch(function (erro) {
            console.log("Erro ao salvar resultado do quiz: ", erro.sqlMessage); // exibe o erro no console para debug
            res.status(500).json(erro.sqlMessage); // se der erro no banco, retorna status 500 com a mensagem do erro
        });
}

module.exports = {
    salvar // exporta a função salvar para ser usada nas rotas
};
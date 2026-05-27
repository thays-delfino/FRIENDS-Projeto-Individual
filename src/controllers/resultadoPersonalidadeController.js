var model = require("../models/resultadoPersonalidadeModel"); // importa o model que contém as queries SQL do teste de personalidade

function salvar(req, res) { // função que salva o resultado do teste de personalidade
    console.log("body recebido:", req.body); // exibe no console os dados recebidos do frontend para debug

    var idUsuario  = req.body.idUsuario;   // pega o id do usuário enviado pelo frontend
    var personagem = req.body.personagem;  // pega o personagem vencedor do teste enviado pelo frontend
    var identificacao = req.body.identificacao; // pega o personagem com quem o usuário se identificou no início do teste

    model.salvar(idUsuario, personagem, identificacao) // chama a função salvar do model passando os três valores
        .then(function (resultado) { res.json(resultado); }) // quando o banco responder, envia o resultado para o frontend
        .catch(function (erro) { res.status(500).json(erro.sqlMessage); }); // se der erro no banco, retorna status 500 com a mensagem do erro
}

module.exports = { salvar }; // exporta a função salvar para ser usada nas rotas
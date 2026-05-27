var usuarioModel = require("../models/usuarioModel"); // importa o model que contém as queries SQL de usuário

function autenticar(req, res) { // função que autentica o login do usuário
    var email = req.body.emailServer; // pega o email enviado pelo frontend
    var senha = req.body.senhaServer; // pega a senha enviada pelo frontend

    if (email == undefined) {  // verifica se o email não foi enviado
        res.status(400).send("Seu email está undefined!"); // retorna erro 400 (requisição inválida)
    } else if (senha == undefined) { // verifica se a senha não foi enviada
        res.status(400).send("Sua senha está indefinida!"); // retorna erro 400 (requisição inválida)
    } else {

        usuarioModel.autenticar(email, senha) // chama a função autenticar do model passando email e senha
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`); // exibe quantos usuários foram encontrados
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) { // se encontrou exatamente 1 usuário, o login é válido
                        console.log("resultado do autenticador:" + resultadoAutenticar);

                        res.json({ // envia os dados do usuário de volta para o frontend
                            id: resultadoAutenticar[0].id, // envia o id do usuário
                            nome: resultadoAutenticar[0].nome, // envia o nome do usuário
                            email: resultadoAutenticar[0].email, // envia o email do usuário
                            senha: resultadoAutenticar[0].senha // envia a senha do usuário
                        });

                    } else if (resultadoAutenticar.length == 0) { // se não encontrou nenhum usuário, email ou senha incorretos
                        res.status(403).send("Email e/ou senha inválido(s)"); // retorna erro 403 (acesso negado)
                    } else { // se encontrou mais de um usuário com o mesmo email e senha
                        res.status(403).send("Mais de um usuário com o mesmo login!"); // retorna erro 403
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage); // exibe a mensagem do erro SQL
                    res.status(500).json(erro.sqlMessage); // retorna erro 500 (erro interno do servidor)
                }
            );
    }

}

function cadastrar(req, res) { // função que cadastra um novo usuário
    var nome = req.body.nomeServer; // pega o nome enviado pelo frontend
    var email = req.body.emailServer; // pega o email enviado pelo frontend
    var senha = req.body.senhaServer; // pega a senha enviado pelo frontend

    if (nome == undefined) { // verifica se o nome não foi enviado
        res.status(400).send("Seu nome está undefined!"); // retorna erro 400
    } else if (email == undefined) { // verifica se o email não foi enviado
        res.status(400).send("Seu email está undefined!"); // retorna erro 400
    } else if (senha == undefined) {// verifica se a senha não foi enviado
        res.status(400).send("Sua senha está undefined!"); // retorna erro 400
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.verificarEmail(email)  // verifica no banco se o email já está cadastrado
            .then(function (resultado) {
                if (resultado.length > 0) { // se retornou algum resultado, o email já existe
                    res.status(409).send("Este e-mail já está cadastrado!"); // retorna erro 409 (conflito)
                } else { // se não encontrou nenhum resultado, o email está disponível
                    usuarioModel.cadastrar(nome, email, senha) // chama a função cadastrar do model passando nome, email e senha
                        .then(function (resultado) { 
                            res.json(resultado); // quando o banco responder, envia o resultado para o frontend
                        })
                        .catch(function (erro) {
                            console.log(erro); 
                            res.status(500).json(erro.sqlMessage);// retorna erro 500
                        });
                }
            })
            .catch(
                function (erro) {
                    console.log(erro); //exibe o objeto completo do erro no console para debug
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    ); // exibe a mensagem do erro SQL
                    res.status(500).json(erro.sqlMessage); // retorna erro 500
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar
}
var database = require("../database/config"); // importa o arquivo de configuração do banco de dados

function autenticar(email, senha) { // função que verifica se o email e senha existem no banco
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)

    var instrucaoSql = `
        SELECT id, nome, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
        -- busca o usuário no banco que tenha exatamente esse email e essa senha
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql); // exibe a query que será executada no console
    return database.executar(instrucaoSql); // executa a query e retorna o resultado
}

function verificarEmail(email) { // função que verifica se o email já está cadastrado no banco
    var instrucaoSql = `
        SELECT id FROM usuario WHERE email = '${email}';
        -- busca se existe algum usuário com esse email no banco
    `;
    return database.executar(instrucaoSql); // executa a query e retorna o resultado
}

function cadastrar(nome, email, senha) { // função que insere um novo usuário no banco
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    // exibe no console uma mensagem de debug com os dados recebidos
    // orienta o desenvolvedor caso ocorra erro de conexão com o banco

    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
        -- insere um novo registro na tabela usuario com o nome, email e senha recebidos
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql); // exibe a query que será executada no console
    return database.executar(instrucaoSql); // executa a query e retorna o resultado
}

module.exports = {
    autenticar,   // exporta a função autenticar para ser usada no controller
    cadastrar,    // exporta a função cadastrar para ser usada no controller
    verificarEmail // exporta a função verificarEmail para ser usada no controller
};
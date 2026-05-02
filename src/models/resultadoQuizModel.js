var database = require("../database/config");

function salvar(idUsuario, pontuacao, total) {
    var instrucaoSql = `
        INSERT INTO resultado_quiz (id_usuario, pontuacao, total) 
        VALUES ('${idUsuario}', '${pontuacao}', '${total}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    salvar
};
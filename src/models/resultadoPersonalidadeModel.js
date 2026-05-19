var database = require("../database/config");

function salvar(idUsuario, personagem, identificacao) {
    var instrucaoSql = `
        INSERT INTO resultado_personalidade (id_usuario, personagem, identificacao) 
        VALUES ('${idUsuario}', '${personagem}','${identificacao}');
    `;
    return database.executar(instrucaoSql);
}

module.exports = { salvar };
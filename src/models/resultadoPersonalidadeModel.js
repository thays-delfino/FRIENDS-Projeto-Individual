var database = require("../database/config");

function salvar(idUsuario, personagem) {
    var instrucaoSql = `
        INSERT INTO resultado_personalidade (id_usuario, personagem) 
        VALUES ('${idUsuario}', '${personagem}');
    `;
    return database.executar(instrucaoSql);
}

module.exports = { salvar };
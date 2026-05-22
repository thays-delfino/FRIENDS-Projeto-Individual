var database = require("../database/config");

function salvar(idUsuario, personagem, identificacao) {
    var sqlVerificar = `SELECT id FROM resultado_personalidade WHERE id_usuario = '${idUsuario}';`;

    return database.executar(sqlVerificar).then(function (resultado) {

        if (resultado.length > 0) {
            var sqlUpdate = `
                UPDATE resultado_personalidade 
                SET personagem = '${personagem}', identificacao = '${identificacao}'
                WHERE id_usuario = '${idUsuario}';
            `;

            return database.executar(sqlUpdate);

        } else {
            var sqlInsert = `
                INSERT INTO resultado_personalidade (id_usuario, personagem, identificacao) 
                VALUES ('${idUsuario}', '${personagem}','${identificacao}');
            `;

            return database.executar(sqlInsert);
        }
    });
}

module.exports = { salvar };
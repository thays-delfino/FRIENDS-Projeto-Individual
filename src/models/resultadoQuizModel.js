var database = require("../database/config");

function salvar(idUsuario, pontuacao, total, data_quiz) {
    var sqlVerificar = `SELECT id FROM resultado_quiz WHERE id_usuario = '${idUsuario}';`;

    return database.executar(sqlVerificar).then(function(resultado) {

        if (resultado.length > 0) {
            var sqlUpdate = `
                UPDATE resultado_quiz 
                SET pontuacao = '${pontuacao}', total = '${total}', data_quiz = NOW()
                WHERE id_usuario = '${idUsuario}';
            `;

            return database.executar(sqlUpdate);

        } else {
            var sqlInsert = `
                INSERT INTO resultado_quiz (id_usuario, pontuacao, total, data_quiz) 
                VALUES ('${idUsuario}', '${pontuacao}', '${total}', NOW());
            `;

            return database.executar(sqlInsert);
        }
    });
}

module.exports = {
    salvar
};
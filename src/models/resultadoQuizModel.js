var database = require("../database/config"); // importa o arquivo de configuração do banco de dados

function salvar(idUsuario, pontuacao, total, data_quiz) { // função que salva ou atualiza o resultado do quiz
    var sqlVerificar = `SELECT id FROM resultado_quiz WHERE id_usuario = '${idUsuario}';`;
    // query que verifica se o usuário já tem um resultado de quiz salvo no banco

    return database.executar(sqlVerificar).then(function(resultado) {
        // executa a query de verificação e quando o banco responder, entra aqui

        if (resultado.length > 0) {
            // se o array tem pelo menos 1 item, o usuário já fez o quiz antes

            var sqlUpdate = `
                UPDATE resultado_quiz 
                SET pontuacao = '${pontuacao}', total = '${total}', data_quiz = NOW()
                -- atualiza a pontuação, o total de perguntas e a data do quiz com a data e hora atual
                WHERE id_usuario = '${idUsuario}';
                -- apenas para o usuário com esse id
            `;

            return database.executar(sqlUpdate); // executa o UPDATE no banco

        } else {
            // se o array está vazio, o usuário ainda não fez o quiz, então insere um novo registro

            var sqlInsert = `
                INSERT INTO resultado_quiz (id_usuario, pontuacao, total, data_quiz) 
                -- insere um novo registro com o id do usuário, pontuação, total de perguntas e data
                VALUES ('${idUsuario}', '${pontuacao}', '${total}', NOW());
                -- NOW() preenche automaticamente com a data e hora atual do servidor
            `;

            return database.executar(sqlInsert); // executa o INSERT no banco
        }
    });
}

module.exports = {
    salvar // exporta a função salvar para ser usada no controller
};
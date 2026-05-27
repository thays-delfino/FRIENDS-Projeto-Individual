var database = require("../database/config"); // importa o arquivo de configuração do banco de dados

function salvar(idUsuario, personagem, identificacao) { // função que salva ou atualiza o resultado do teste de personalidade
    var sqlVerificar = `SELECT id FROM resultado_personalidade WHERE id_usuario = '${idUsuario}';`;
    // query que verifica se o usuário já tem um resultado salvo no banco

    return database.executar(sqlVerificar).then(function (resultado) {
        // executa a query de verificação e quando o banco responder, entra aqui

        if (resultado.length > 0) {
            // se o array tem pelo menos 1 item, o usuário já fez o teste antes

            var sqlUpdate = `
                UPDATE resultado_personalidade 
                SET personagem = '${personagem}', identificacao = '${identificacao}'
                -- atualiza o personagem resultado e o personagem de identificação
                WHERE id_usuario = '${idUsuario}';
                -- apenas para o usuário com esse id
            `;

            return database.executar(sqlUpdate); // executa o UPDATE no banco

        } else {
            // se o array está vazio, o usuário ainda não fez o teste, então insere um novo registro

            var sqlInsert = `
                INSERT INTO resultado_personalidade (id_usuario, personagem, identificacao) 
                -- insere um novo registro com o id do usuário, o personagem resultado e o personagem de identificação
                VALUES ('${idUsuario}', '${personagem}','${identificacao}');
            `;

            return database.executar(sqlInsert); // executa o INSERT no banco
        }
    });
}

module.exports = { salvar }; // exporta a função salvar para ser usada no controller
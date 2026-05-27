var database = require("../database/config"); // importa o arquivo de configuração do banco de dados

function getKpis() { // função que busca os indicadores do dashboard
    var instrucaoSql = `
        SELECT
            (SELECT ROUND(AVG(pontuacao),2) FROM resultado_quiz) AS media,
            -- busca a média de pontuação do quiz arredondada com 2 casas decimais

            (SELECT COUNT(*) FROM resultado_personalidade) AS totalTestes,
            -- conta quantos testes de personalidade foram realizados

            (SELECT personagem FROM resultado_personalidade 
             GROUP BY personagem ORDER BY COUNT(*) DESC LIMIT 1) AS personagemPopular;
            -- agrupa por personagem, ordena pelo mais frequente e pega apenas o primeiro
    `;
    return database.executar(instrucaoSql); // executa a query e retorna o resultado
}

function getGraficoPizza() { // função que busca os dados do gráfico de pizza
    var instrucaoSql = `
        SELECT identificacao, COUNT(*) AS total 
        -- busca o personagem com quem o usuário se identificou e conta quantas vezes aparece
        FROM resultado_personalidade 
        GROUP BY identificacao;
        -- agrupa pelo personagem de identificação para contar cada um separadamente
    `;
    return database.executar(instrucaoSql); // executa a query e retorna o resultado
}

function getPersonagens() { // função que busca os personagens mais tirados no teste
    var instrucaoSql = `
        SELECT personagem, COUNT(*) AS total 
        -- busca o personagem resultado do teste e conta quantas vezes cada um aparece
        FROM resultado_personalidade 
        GROUP BY personagem
        -- agrupa pelo personagem para contar cada um separadamente
        ORDER BY total DESC;
        -- ordena do mais popular para o menos popular
    `;
    return database.executar(instrucaoSql); // executa a query e retorna o resultado
}

function getRanking() { // função que busca o ranking dos 5 melhores pontuações do quiz
    var instrucaoSql = `
        SELECT u.nome, r.pontuacao, r.total
        -- busca o nome do usuário, sua pontuação e o total de perguntas
        FROM resultado_quiz r
        JOIN usuario u 
        ON u.id = r.id_usuario
        -- faz um JOIN entre a tabela resultado_quiz e usuario para trazer o nome do usuário
        ORDER BY r.pontuacao DESC
        -- ordena do maior para o menor pontuação
        LIMIT 5;
        -- traz apenas os 5 primeiros
    `;
    return database.executar(instrucaoSql); // executa a query e retorna o resultado
}

module.exports = { getKpis, getGraficoPizza, getPersonagens, getRanking }; // exporta todas as funções para serem usadas no controller
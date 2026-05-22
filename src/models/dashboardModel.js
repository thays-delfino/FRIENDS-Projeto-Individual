var database = require("../database/config");

function getKpis() {
    var instrucaoSql = `
        SELECT
            (SELECT ROUND(AVG(pontuacao),2) FROM resultado_quiz) AS media,
            (SELECT COUNT(*) FROM resultado_personalidade) AS totalTestes,
            (SELECT personagem FROM resultado_personalidade 
             GROUP BY personagem ORDER BY COUNT(*) DESC LIMIT 1) AS personagemPopular;
    `;
    return database.executar(instrucaoSql);
}

function getGraficoPizza() {
    var instrucaoSql = `
        SELECT identificacao, COUNT(*) AS total 
        FROM resultado_personalidade 
        GROUP BY identificacao;
    `;
    return database.executar(instrucaoSql);
}

function getPersonagens() {
    var instrucaoSql = `
        SELECT personagem, COUNT(*) AS total 
        FROM resultado_personalidade 
        GROUP BY personagem
        ORDER BY total DESC;
    `;
    return database.executar(instrucaoSql);
}

function getRanking() {
    var instrucaoSql = `
        SELECT u.nome, r.pontuacao, r.total
        FROM resultado_quiz r
        JOIN usuario u ON u.id = r.id_usuario
        ORDER BY r.pontuacao DESC
        LIMIT 5;
    `;
    return database.executar(instrucaoSql);
}

module.exports = { getKpis, getGraficoPizza, getPersonagens, getRanking };
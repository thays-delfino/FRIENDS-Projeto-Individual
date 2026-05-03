var database = require("../database/config");

function getKpis() {
    var instrucaoSql = `
        SELECT
            (SELECT COUNT(*) FROM usuario) AS totalUsuarios,
            (SELECT COUNT(*) FROM resultado_quiz) AS totalQuizzes,
            (SELECT COUNT(*) FROM resultado_personalidade) AS totalTestes,
            (SELECT personagem FROM resultado_personalidade 
             GROUP BY personagem ORDER BY COUNT(*) DESC LIMIT 1) AS personagemPopular;
    `;
    return database.executar(instrucaoSql);
}

function getGraficoPizza() {
    var instrucaoSql = `
        SELECT personagem, COUNT(*) AS total 
        FROM resultado_personalidade 
        GROUP BY personagem;
    `;
    return database.executar(instrucaoSql);
}


module.exports = { getKpis, getGraficoPizza};
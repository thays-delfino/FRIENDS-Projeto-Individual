// var ambiente_processo = 'producao';
var ambiente_processo = 'desenvolvimento';

var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';
// Acima, temos o uso do operador ternário para definir o caminho do arquivo .env
// A sintaxe do operador ternário é: condição ? valor_se_verdadeiro : valor_se_falso

require("dotenv").config({ path: caminho_env });

var express = require("express"); // importa o framework Express para criar o servidor
var cors = require("cors"); // importa o CORS para permitir requisições de origens diferentes
var path = require("path"); // importa o módulo path para trabalhar com caminhos de arquivos

var PORTA_APP = process.env.APP_PORT; // pega a porta do servidor definida no arquivo .env
var HOST_APP = process.env.APP_HOST; // pega o host do servidor definido no arquivo .env

var app = express(); // cria a aplicação Express

// importa todos os arquivos de rotas
var indexRouter = require("./src/routes/index"); // rotas da página inicial
var usuarioRouter = require("./src/routes/usuarios"); // rotas de cadastro e login
var resultadoQuizRoutes = require("./src/routes/resultadoQuizRoutes"); // rotas do quiz
var personalidadeRoutes = require("./src/routes/resultadoPersonalidadeRoutes"); // rotas do teste de personalidade
var dashboardRoutes = require("./src/routes/dashboardRoutes"); // rotas do dashboard

app.use(express.json()); // permite que o servidor leia dados no formato JSON enviados pelo frontend
app.use(express.urlencoded({ extended: false })); // permite que o servidor leia dados enviados por formulários HTML
app.use(express.static(path.join(__dirname, "public"))); // define a pasta public como estática, onde ficam os arquivos HTML, CSS e JS

app.use(cors()); // habilita o CORS para permitir que o frontend acesse o backend

// define qual arquivo de rotas será usado para cada caminho
app.use("/", indexRouter); // requisições para "/" vão para indexRouter
app.use("/usuarios", usuarioRouter); // requisições para "/usuarios" vão para usuarioRouter
app.use("/quiz", resultadoQuizRoutes); // requisições para "/quiz" vão para resultadoQuizRoutes
app.use("/personalidade", personalidadeRoutes); // requisições para "/personalidade" vão para personalidadeRoutes
app.use("/dashboard", dashboardRoutes); // requisições para "/dashboard" vão para dashboardRoutes

app.listen(PORTA_APP, function () {
    console.log(`
    ##   ##  ######   #####             ####       ##     ######     ##              ##  ##    ####    ######  
    ##   ##  ##       ##  ##            ## ##     ####      ##      ####             ##  ##     ##         ##  
    ##   ##  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##        ##   
    ## # ##  ####     #####    ######   ##  ##   ######     ##     ######   ######   ##  ##     ##       ##    
    #######  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##      ##     
    ### ###  ##       ##  ##            ## ##    ##  ##     ##     ##  ##             ####      ##     ##      
    ##   ##  ######   #####             ####     ##  ##     ##     ##  ##              ##      ####    ######  
    \n\n\n                                                                                                 
    Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar .: http://${HOST_APP}:${PORTA_APP} :. \n\n
    Você está rodando sua aplicação em ambiente de .:${process.env.AMBIENTE_PROCESSO}:. \n\n
    \tSe .:desenvolvimento:. você está se conectando ao banco local. \n
    \tSe .:producao:. você está se conectando ao banco remoto. \n\n
    \t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'\n\n`);
});

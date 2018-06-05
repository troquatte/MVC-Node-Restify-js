"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Dotenv: Variaveis de ambiente
const dotenv = require("dotenv");
//Configuração do servidor
const Server_1 = require("./Server");
//Rotas Principais
const Principais_1 = require("./App/Route/Principais");
//Ligando Server
const serve = new Server_1.Serve();
//Mini Configuração Dotenv
dotenv.config();
//Start no Server chamando classe bootstrap e passando array de Rotas
//Para adicionar mais rotas passe a classe no [RotasPrincipais,SUA NOVA ROTA]
serve.bootstrap([Principais_1.RotasPrincipais]).then(serve => {
    //Console de tudo ok
    console.log('Servidor Funcionando');
}).catch(error => {
    //Console de Algo deu Errado
    console.log('Algo deu Errado');
});

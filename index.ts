//Restify: Restfull
import * as restify from 'restify'
//Dotenv: Variaveis de ambiente
import * as dotenv from 'dotenv'

//Configuração do servidor
import { Serve } from './Server'

//Rotas Principais
import { RotasPrincipais } from './App/Route/Principais'

//Ligando Server
const serve = new Serve();

//Mini Configuração Dotenv
dotenv.config();

//Start no Server chamando classe bootstrap e passando array de Rotas
//Para adicionar mais rotas passe a classe no [RotasPrincipais,SUA NOVA ROTA]
serve.bootstrap([RotasPrincipais]).then(serve=>{
    //Console de tudo ok
    console.log('Servidor Funcionando');
}).catch(error => {
    //Console de Algo deu Errado
    console.log('Algo deu Errado');
});
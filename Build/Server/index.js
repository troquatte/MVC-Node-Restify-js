"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
//Iniciando Servidor
class Serve {
    //Iniciando as Rotas
    initRoutes(rotas = []) {
        //Promise
        return new Promise((resolve, reject) => {
            try {
                //Configuração de Servidor
                this.application = restify.createServer();
                this.application.use(restify.plugins.queryParser());
                this.application.use(restify.plugins.bodyParser());
                //Adicionando as Rotas em uma Array e Fazendo o 'for' delas;
                for (let rota of rotas) {
                    rota.applyRoute(this.application);
                }
                //Iniciando Servidor
                this.application.listen(process.env.SERVER_PORT, function () {
                    resolve(this.application);
                });
            }
            catch (e) {
                reject(e);
            }
        });
    }
    //Final Iniciando as Rotas
    //Bootstrap para Iniciar a App
    bootstrap(rotas = []) {
        return this.initRoutes(rotas).then(() => this);
    }
}
exports.Serve = Serve;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Controller: PrincipaisController
const PrincipaisController_1 = require("../../Controller/PrincipaisController");
const AbstractRoute_1 = require("../AbstractRoute");
//Classe de Rotas
class Route extends AbstractRoute_1.AbstractRoute {
    //applyRoute
    applyRoute(application) {
        //Rota '/'
        application.get('/', function (req, res, next) {
            //Controller chamando home            
            PrincipaisController_1.PrincipaisController.home(req, res, next);
        });
        //Rota '/teste'
        application.get('/teste', function (req, res, next) {
            //Controller chamando teste
            PrincipaisController_1.PrincipaisController.teste(req, res, next);
        });
    }
}
//Quando criar uma nova rota Altere o nome da const RotasPrincipais
//Não podemos ter nomes iguais na hora do export para import no index principai
exports.RotasPrincipais = new Route();

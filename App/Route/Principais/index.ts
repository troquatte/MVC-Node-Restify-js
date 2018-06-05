//Restify
import * as restify from 'restify'
//Controller: PrincipaisController
import { PrincipaisController } from '../../Controller/PrincipaisController'
import { AbstractRoute } from '../AbstractRoute'

//Classe de Rotas
class Route extends AbstractRoute
{
    //applyRoute
    public applyRoute(application: restify.Server) {
        //Rota '/'
        application.get('/', function(req, res, next){
            //Controller chamando home            
            PrincipaisController.home(req, res, next);
        });

        //Rota '/teste'
        application.get('/teste', function(req, res, next){
            //Controller chamando teste
            PrincipaisController.teste(req, res, next);
        })
    
    }
  
}

//Quando criar uma nova rota Altere o nome da const RotasPrincipais
//Não podemos ter nomes iguais na hora do export para import no index principai
export const RotasPrincipais = new Route();
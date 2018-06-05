//Mongoose
import * as mongoose from 'mongoose'
import { Connection } from '../../../Config/DbConnection'
//Model
import { Vagas } from '../../Model/ListagemDeVagas'

//Controller
class Principais{
    
    //Home
    public home(req, res, next){
        //ARRUMAR
        Connection.initDb();
        Vagas.create({ title: 'small' });
        //ARRUMAR

        res.send({Server: '/Funcionando'})
        console.log('ok');
        next();
    }

    //Teste
    public teste(req, res, next){
        res.send({Server: '/teste/Funcionando'})
        console.log('teste');
        next();
    }

}

export const PrincipaisController = new Principais(); 
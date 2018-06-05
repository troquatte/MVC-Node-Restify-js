"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DbConnection_1 = require("../../../Config/DbConnection");
//Model
const ListagemDeVagas_1 = require("../../Model/ListagemDeVagas");
//Controller
class Principais {
    //Home
    home(req, res, next) {
        //ARRUMAR
        DbConnection_1.Connection.initDb();
        ListagemDeVagas_1.Vagas.create({ title: 'small' });
        //ARRUMAR
        res.send({ Server: '/Funcionando' });
        console.log('ok');
        next();
    }
    //Teste
    teste(req, res, next) {
        res.send({ Server: '/teste/Funcionando' });
        console.log('teste');
        next();
    }
}
exports.PrincipaisController = new Principais();

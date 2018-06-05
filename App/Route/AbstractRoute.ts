import * as restify from 'restify'

//Classe Abstrata para as rotas seguirem o mesmo modelo
export abstract class AbstractRoute {
    abstract applyRoute(application: restify.Server)
}
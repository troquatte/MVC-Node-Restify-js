import * as restify from 'restify'

//Iniciando Servidor
export class Serve {

    //Variavel Global Restify
    public application: restify.Server
    
    //Iniciando as Rotas
    public initRoutes(rotas = []): Promise<any>
    {
        //Promise
        return new Promise((resolve, reject)=>{
            try{
                
                //Configuração de Servidor
                this.application = restify.createServer();
                this.application.use(restify.plugins.queryParser());
                this.application.use(restify.plugins.bodyParser());

                //Adicionando as Rotas em uma Array e Fazendo o 'for' delas;
                for (let rota of rotas ){
                    rota.applyRoute(this.application);
                }                 

                //Iniciando Servidor
                this.application.listen(process.env.SERVER_PORT, function(){
                   resolve(this.application)
                })

            }catch(e){
                reject(e);
            }
        })

    }
    //Final Iniciando as Rotas

    //Bootstrap para Iniciar a App
    public bootstrap(rotas = [])
    {
        return this.initRoutes(rotas).then( ()=> this );
    }

}


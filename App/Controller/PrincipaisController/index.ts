//Controller
class Principais{
    
    //Home
    public home(req, res, next){
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
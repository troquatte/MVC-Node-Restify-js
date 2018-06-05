import * as mongoose from 'mongoose'

//DbConnection
class DbConnection{
    //Iniciar DB
    public initDb()
    {
        (<any>mongoose).Promise = global.Promise
        return mongoose.connect('mongodb://' + process.env.DB_CONNECTION, { useMongoClient: true });
    }
}

export const Connection = new DbConnection();
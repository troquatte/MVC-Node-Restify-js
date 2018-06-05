"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
//DbConnection
class DbConnection {
    //Iniciar DB
    initDb() {
        mongoose.Promise = global.Promise;
        return mongoose.connect('mongodb://' + process.env.DB_CONNECTION, { useMongoClient: true });
    }
}
exports.Connection = new DbConnection();

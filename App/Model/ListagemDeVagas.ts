import * as mongoose from 'mongoose'

const Schema = mongoose.Schema;

const SchemaVagas = new Schema({
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }]
});

export const Vagas = mongoose.model('ListagemDeVagas', SchemaVagas);
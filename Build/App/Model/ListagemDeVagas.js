"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SchemaVagas = new Schema({
    title: String,
    author: String,
    body: String,
    comments: [{ body: String, date: Date }]
});
exports.Vagas = mongoose.model('ListagemDeVagas', SchemaVagas);

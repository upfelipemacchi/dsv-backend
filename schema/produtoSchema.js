const mongoose = require("mongoose")

const produtoSchema = new mongoose.Schema({
    nome: {type: String, required: [true, "Nome obrigatório"]},
    img: String,
    preco: {type: Number, required: [true, "Preço obrigatório"]},
    quantidade: Number
});

module.exports = produtoSchema;
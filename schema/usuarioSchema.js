const mongoose = require("mongoose")

const usuarioSchema = new mongoose.Schema({
    nome: {type: String, required: [true, "Nome obrigatório"]},
    usuario: {type: String, required: [true, "Nome de usuário obrigatório"]},
    senha: {type: String, required: [true, "Senha obrigatória"]},
    admin: Boolean,
});

module.exports = usuarioSchema;
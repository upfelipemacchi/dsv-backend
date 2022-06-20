const mongoose = require ("mongoose");

const usuarioSchema = require("../schema/usuarioSchema.js");
module.exports = mongoose.model("usuarios", usuarioSchema);
const mongoose = require ("mongoose");

const produtoSchema = require("../schema/produtoSchema");
module.exports = mongoose.model("produtos", produtoSchema);
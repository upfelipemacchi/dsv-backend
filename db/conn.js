const mongoose = require("mongoose")

const URL = "mongodb://localhost:27017/manypets";

const db = mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});
  
const con = mongoose.connection;
  
con.on("open", () => {
    console.log("Conectado ao MongoDB!");
});
  
con.on("error", error => {
    console.error("Erro na conexão com o MongoDB!" + error);
});
  
con.on("close", () => {
    console.warn("Desconetado do MongoDB!");
});
  
module.exports = db;
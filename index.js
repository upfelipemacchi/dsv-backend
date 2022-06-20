require("./db/conn");
const express = require("express");
const flash = require("express-flash");

// Express
const app = express();

// Routes
const produtoRoutes = require("./routes/produtoRoutes");
const usuarioRoutes = require("./routes/usuarioRoutes");

// Cors
const cors = require("cors");


app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

app.use(cors());

app.use(flash());

// Routes
app.use("/produtos", produtoRoutes);
app.use("/usuarios", usuarioRoutes);
app.listen(3000);
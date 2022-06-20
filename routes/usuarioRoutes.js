const express = require("express");
const router = express.Router();
const UsuarioController = require("../controllers/UsuarioController");

router.get("/listar", UsuarioController.listar);
router.get("/buscar/:id", UsuarioController.buscar);
router.post("/cadastrar", UsuarioController.cadastrar);
router.put("/atualizar", UsuarioController.atualizar);
router.delete("/deletar/:id", UsuarioController.remover);

module.exports = router;
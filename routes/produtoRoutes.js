const express = require("express");
const router = express.Router();
const ProdutoController = require("../controllers/ProdutoController");

router.get("/listar", ProdutoController.listar);
router.get("/buscar/:id", ProdutoController.buscar);
router.post("/cadastrar", ProdutoController.cadastrar);
router.put("/atualizar", ProdutoController.atualizar);
router.delete("/deletar/:id", ProdutoController.remover);

module.exports = router;
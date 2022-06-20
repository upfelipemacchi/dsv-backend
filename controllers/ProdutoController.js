const Produto = require("../models/Produto");


exports.cadastrar = async (req, res) => {
    const data = req.body;

    try {
        const repost = await Produto.create(data);
        res.status(201).json(repost);
    } catch(error) {
        console.error(error);
    }
}


exports.listar = async (req, res) => {
    const produtos = await Produto.find({});

    res.status(200).json(produtos);
}


exports.buscar = async (req, res) => {
    const id = req.params.id;
    const produto = await Produto.findOne({where : {id : id}});

    res.status(200).json(produto);
}


exports.atualizar = async (req, res) => {
    const id = req.body.id;
    const data = req.body;

    const produto = await Produto.update(data, {where: {id : id}});
    res.status(200).json(produto);
}


exports.remover = async(req, res) => {
    const id = req.body.id;
    const produto = await Produto.destroy({where: {id : id}});

    res.status(200).json(produto);
}
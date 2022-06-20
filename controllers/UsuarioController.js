const Usuario = require("../models/Usuario");


exports.cadastrar = async (req, res) => {
    const {nome, usuario, senha, admin} = req.body;

    const data = {nome, usuario, senha, admin};

    try {
        const repost = await Usuario.create(data);
        res.status(201).json(repost);
    } catch(error) {
        console.error(error);
    }
}


exports.listar = async (req, res) => {
    const usuario = await Usuario.find({});

    res.status(200).json(usuario);
}


exports.buscar = async (req, res) => {
    const id = req.params.id;
    const usuario = await Usuario.findOne({where : {id : id}});

    res.status(200).json(usuario);
}


exports.atualizar = async (req, res) => {
    const id = req.body.id;
    const data = req.body;

    const usuario = await Usuario.update(data, {where: {id : id}});
    res.status(200).json(usuario);
}


exports.remover = async(req, res) => {
    const id = req.body.id;
    const usuario = await Usuario.destroy({where: {id : id}});

    res.status(200).json(usuario);
}
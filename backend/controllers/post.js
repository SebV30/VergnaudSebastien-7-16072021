const { Sequelize } = require('sequelize');
const models = require('../models/index');
const fs = require('fs');
const jwt = require('jsonwebtoken');

// CREATION D'UN POST 
exports.createPost = (req, res, next) => {
    models.Post.create({
            title: req.body.title,
            content: req.body.content,
            image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
            // UserId: userId,
            UserId: req.body.UserId
        })
        .then(() => res.status(201).json({ message: 'Post créé' }))
        .catch(error => res.status(400).json({ error }));
};

// MODIFICATION D'UN POST
exports.updatePost = (req, res, next) => {
    //Création d'un nouvel objet POST
    let postObject;
    if (req.file) {
        postObject = {
            title: req.body.title,
            content: req.body.content,
            image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        }
        models.Post.findAll({ where: { id: req.params.id } })
            .then((Post) => {
                const filename = Post[0].image.split('/images/')[1];
                fs.unlink(`images/${filename}`, () => {
                    models.Post.update({...postObject }, { where: { id: req.params.id } })
                        .then(() => res.status(200).json({ message: "Votre post a bien été modifié." }))
                        .catch(error => res.status(400).json({ message: "Modification du Post IMPOSSIBLE" + error }));
                })
            })
            .catch(error => console.log("Ce post est introuvable" + error));
    } else {
        models.Post.update({
                title: req.body.title,
                content: req.body.content,
                // image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
            }, { where: { id: req.params.id } })
            .then(() => res.status(200).json({ message: "Votre post a bien été modifié." }))
            .catch(error => res.status(400).json({ message: "Modification du post impossible" + error }))
    };
};

// SUPPRESSION D'UN POST
exports.deletePost = (req, res, next) => {
    models.Post.findAll({ where: { id: req.params.id } })
        .then((Post) => {
            const filename = Post[0].image.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
                models.Post.destroy({ where: { id: req.params.id } })
                    .then(() => res.status(200).json({ message: 'Votre post a été supprimé' }))
                    .catch(error => res.status(400).json({ error }));
            })
        })
        .catch(error => res.status(500).json({ error }));
};

// ACCES A TOUS LES POSTS
exports.getAllPost = (req, res, next) => {
    models.Post.findAll({
            order: [
                ['createdAt', 'DESC']
            ],
            include: [{ model: models.User }]
        })
        .then((posts) => res.status(200).json(posts))
        .catch(error => res.status(400).json({ error }));
};

// ACCES A UN POST PRECIS
exports.getOnePost = (req, res, next) => {
    models.Post.findOne({ where: { id: req.params.id }, include: [{ model: models.User }] })
        .then((post) => res.status(200).json(post))
        .catch(error => res.status(400).json({ error }))
};
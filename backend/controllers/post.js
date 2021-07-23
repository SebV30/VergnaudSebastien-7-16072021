const { Sequelize } = require('sequelize');
const models = require('../models/index');
const fs = require('fs');

// CREATION D'UN POST
exports.createdPost = (req, res, next) => {
    models.Post.create({
            title: req.body.title,
            content: req.body.content,
            imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        })
        .then(() => res.status(201).json({ message: 'Post créé' }))
        .catch(error => res.status(400).json({ error }));
};

// MODIFICATION D'UN POST
exports.updatedPost = (req, res, next) => {

    models.Post.update({
        title: req.body.title,
        content: req.body.content,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
    });
};

// SUPPRESSION D'UN POST
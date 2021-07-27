const { Sequelize } = require('sequelize');
const models = require('../models/index');

// CREATION D'UN COMMENTAIRE
exports.createComment = (req, res, next) => {
    models.Comment.create({
            content: req.body.content,
            UserId: req.body.UserId,
            PostId: req.body.PostId
        })
        .then(() => res.status(201).json({ message: 'Commentaire ajouté' }))
        .catch(error => res.status(400).json({ error }));
};

// MODIFICATION D'UN COMMENTAIRE
exports.updateComment = (req, res, next) => {
    models.Comment.update({
            content: req.body.content
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(() => res.status(200).json({ message: 'Commentaire modifié' }))
        .catch(error => res.status(400).json({ error }));
}

// SUPPRESSION D'UN COMMENTAIRE
exports.deleteComment = (req, res, next) => {
    models.Comment.destroy({ where: { id: req.params.id } })
        .then(() => res.status(200).json({ message: 'Commentaire supprimé' }))
        .catch(error => res.status(400).json({ error }));
};

//ACCES A TOUS LES COMMENTAIRES
exports.getAllComment = (req, res, next) => {
    models.Comment.findAll({
            order: [
                ['createdAt', 'DESC']
            ],
            include: [{ model: models.User }, { model: models.Post }]
        })
        .then((comments) => res.status(200).json(comments))
        .catch(error => res.status(400).json({ error }));
};

//ACCES A UN COMMENTAIRE PRECIS
exports.getOneComment = (req, res, next) => {
    models.Comment.findOne({ where: { id: req.params.id }, include: [{ model: models.User }, { model: models.Post }] })
        .then((comment) => res.status(200).json(comment))
        .catch(error => res.status(400).json({ error }))

}
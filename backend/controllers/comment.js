const { Sequelize } = require('sequelize');
const models = require('../models/index');
const jwt = require('jsonwebtoken');

// CREATION D'UN COMMENTAIRE
exports.createComment = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.TOKEN);
    const userId = decodedToken.userId;

    models.Comment.create({
            content: req.body.content,
            UserId: userId,
            // UserId: req.body.UserId,
            PostId: req.params.id
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


//ACCES A UN COMMENTAIRE PRECIS
exports.getOneComment = (req, res, next) => {
    models.Comment.findOne({ where: { id: req.params.id }, include: [{ model: models.User }, { model: models.Post }] })
        .then((comment) => res.status(200).json(comment))
        .catch(error => res.status(400).json({ error }))

};
//ACCES A TOUS LES COMMENTAIRES D'UN POST PRECIS
exports.getAllCommentFromOnePost = (req, res, next) => {
    models.Comment.findAll({
            order: [
                ['createdAt', 'DESC']
            ],
            include: [{ model: models.User }, { model: models.Post }],
            where: { PostId: req.params.id }
        })
        .then((comments) => res.status(200).json(comments))
        .catch(error => res.status(400).json({ error }));
};
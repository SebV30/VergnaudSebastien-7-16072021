const models = require('../models/index');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();

// CREATION D'UN NOUVEL UTILISATEUR
exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            models.User.create({
                    email: req.body.email,
                    userName: req.body.userName,
                    password: hash,
                    isAdmin: 0
                })
                .then(() => res.status(201).json({ message: 'Utilisateur créé' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};


// CONNEXION D'UTILISATEUR DEJA INSCRIT
exports.login = (req, res, next) => {
    models.User.findOne({ where: { email: req.body.email, } })
        .then(user => {
            if (!user) {
                return res.status(404).json({ error: 'Utilisateur inconnu' })
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect' });
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign({ userId: user._id },
                            process.env.TOKEN, { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        });
};


// SUPPRIMER SON COMPTE UTILISATEUR
exports.deleteUser = (req, res, next) => {
    models.User.destroy({ where: { userId: req.params.id } })
        .then(() => res.status(201).json({ message: 'Utilisateur supprimé' }))
        .catch(error => res.status(400).json({ error }));
};

// MODIFICATION DE SON PROFIL UTILISATEUR
exports.updateUser = (req, res, next) => {
    models.user.update({
            email: req.body.email,
            userName: req.body.userName,
            //password:
        }, { where: { id: req.params.id } })
        .then(() => res.status(201).json({ message: 'Utilisateur modifié' }))
        .catch(error => res.status(400).json({ error }));
};

// TROUVER UN UTILISATEUR PRECIS
exports.getOneUser = (req, res, next) => {
    models.user.findOne({ where: { userId: req.params.id } })
        .then(() => res.status(201).json({ message: 'Utilisateur sélectionné' }))
        .catch(error => res.status(400).json({ error }))
};
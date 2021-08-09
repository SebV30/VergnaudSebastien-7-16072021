const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');

//Création Utilisateur
router.post('/signup', userCtrl.signup);
//Connexion utilisateur existant
router.post('/login', userCtrl.login);
//Suppression utilisateur
router.delete('/:id', auth, userCtrl.deleteUser);
//Modification utilisateur
router.post('/:id', auth, userCtrl.updateUser);
//Accès à un utilisateur précis
router.get('/:id', auth, userCtrl.getOneUser);

module.exports = router;
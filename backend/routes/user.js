const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');

router.post('/signup', userCtrl.signup); //Création Utilisateur
router.post('/login', userCtrl.login); //Connexion utilisateur existant
router.delete('/:id', auth, userCtrl.deleteUser); //Suppression utilisateur
router.post('/:id', auth, userCtrl.updateUser); //Modification utilisateur
router.get('/:id', auth, userCtrl.getOneUser); //Accès à un utilisateur précis

module.exports = router;
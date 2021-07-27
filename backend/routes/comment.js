const express = require('express');
const router = express.Router();
const commentCtrl = require('../controllers/comment');
const auth = require('../middleware/auth');

router.post('/create', auth, commentCtrl.createComment); //Création commentaire
router.put('/create/:id', auth, commentCtrl.updateComment); //Modification commentaire
router.delete('/delete/:id', auth, commentCtrl.deleteComment); //Suppression commentaire
router.get('/', auth, commentCtrl.getAllComment); //Accès à tous les commentaire
router.get('/:id', auth, commentCtrl.getOneComment); //Accès à un commentaire précis

module.exports = router;
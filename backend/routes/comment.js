const express = require('express');
const router = express.Router();
const commentCtrl = require('../controllers/comment');
const auth = require('../middleware/auth');

router.put('/:id', auth, commentCtrl.updateComment); //Modification commentaire
router.delete('/:id', auth, commentCtrl.deleteComment); //Suppression commentaire
router.get('/:id', auth, commentCtrl.getOneComment); //Accès à un commentaire précis

module.exports = router;
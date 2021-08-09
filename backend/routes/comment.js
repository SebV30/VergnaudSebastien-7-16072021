const express = require('express');
const router = express.Router();
const commentCtrl = require('../controllers/comment');
const auth = require('../middleware/auth');

//Modification commentaire
router.put('/:id', auth, commentCtrl.updateComment);
//Suppression commentaire
router.delete('/:id', auth, commentCtrl.deleteComment);
//Accès à un commentaire précis
router.get('/:id', auth, commentCtrl.getOneComment);

module.exports = router;
const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post');
const commentCtrl = require('../controllers/comment');

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', auth, multer, postCtrl.createPost); //Création post
router.put('/:id', auth, multer, postCtrl.updatePost); //Modification post
router.delete('/:id', auth, postCtrl.deletePost); //Suppression post
router.get('/', auth, postCtrl.getAllPost); //Accès à tous les posts
router.get('/:id', auth, postCtrl.getOnePost); //Accès à un post précis
router.get('/:id/comment', auth, commentCtrl.getAllCommentFromOnePost); //Accès à tous les commentaires d'1 post précis
router.post('/:id/comment', auth, commentCtrl.createComment); //Créer un commentaire à partir d'un Id Post

module.exports = router;
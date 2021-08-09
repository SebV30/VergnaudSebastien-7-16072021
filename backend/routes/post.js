const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post');
const commentCtrl = require('../controllers/comment');

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

//Création post
router.post('/', auth, multer, postCtrl.createPost);
//Modification post
router.put('/:id', auth, multer, postCtrl.updatePost);
//Suppression post
router.delete('/:id', auth, postCtrl.deletePost);
//Accès à tous les posts
router.get('/', auth, postCtrl.getAllPost);
//Accès à un post précis
router.get('/:id', auth, postCtrl.getOnePost);
//Accès à tous les commentaires d'1 post précis
router.get('/:id/comment', auth, commentCtrl.getAllCommentFromOnePost);
//Créer un commentaire à partir d'un Id Post
router.post('/:id/comment', auth, commentCtrl.createComment);

module.exports = router;
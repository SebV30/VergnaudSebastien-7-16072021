const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post');

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/create', auth, multer, postCtrl.createPost); //Création post
router.put('/create/:id', auth, multer, postCtrl.updatePost); //Modification post
router.delete('/delete/:id', auth, postCtrl.deletePost); //Suppression post
router.get('/all', auth, postCtrl.getAllPost); //Accès à tous les posts
router.get('/one/:id', auth, postCtrl.getOnePost); //Accès à un post précis

module.exports = router;
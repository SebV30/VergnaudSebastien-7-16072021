const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const dotenv = require('dotenv');
dotenv.config();

const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
// const commentRoutes = require('./routes/comment');



const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use(helmet());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, //15 minutes
    max: 100 //limite à 100 requêtes, pour chaque IP, par tranche de 15 minutes (windowMS)
});


app.use('/images', express.static(path.join(__dirname, 'images')));


app.use('/api/user', userRoutes); //Inscription + connexion + modif profil + suppr compte
app.use('/api/post', postRoutes); //Posts
// app.use('/api/...', ...Routes); //Commentaires
// app.use('/api/...', ...Routes); //Déconnexion


module.exports = app;